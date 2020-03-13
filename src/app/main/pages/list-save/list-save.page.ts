import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { ListsService } from '../../services/lists.service';


@Component({
  selector: 'app-list-save',
  templateUrl: './list-save.page.html',
  styleUrls: ['./list-save.page.scss']
})
export class ListSavePage implements OnInit {
  formGroup: FormGroup;
  pageTitle = '...';
  listId: string = undefined;
  // myDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private listService: ListsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const listId = this.route.snapshot.paramMap.get('id');
    if (!listId) {
      this.pageTitle = 'Create List';
      return;
    }
    this.listId = listId;
    this.pageTitle = 'Edit List';
    this.listService
      .get(listId)
      .pipe(take(1))
      .subscribe(({ name, isactive }) => {
        this.formGroup.get('name').setValue(name);
        this.formGroup.get('isactive').setValue(isactive);
      });
  }

  private createForm(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      isactive: [true]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Saving...'
    });
    try {
      const list = !this.listId
        ? await this.listService.create(this.formGroup.value)
        : await this.listService.update({
            id: this.listId,
            ...this.formGroup.value
          });
      this.listService.deleteFieldId(list.id);
      this.navCtrl.navigateBack('/lists');
    } catch (error) {
      console.log('Error saving List: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
