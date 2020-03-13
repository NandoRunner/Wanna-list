import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';

import { List } from '../../models/list.model';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss']
})
export class ListViewPage implements OnInit {
  lists$: Observable<List[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private listService: ListsService
  ) {}

  async ngOnInit(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.lists$ = this.listService.getAll();
    this.lists$.pipe(take(1)).subscribe(lists => loading.dismiss());
  }

  onUpdate(o: List): void {
    this.navCtrl.navigateForward(['lists', 'edit', o.id]);
  }

  async onDelete(o: List): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete the list "${o.name}"?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.listService.delete(o);
            await this.overlayService.toast({
              message: `List "${o.name}" deleted!`
            });
          }
        },
        'No'
      ]
    });
  }

  async onDone(o: List): Promise<void> {
    const listToUpdate = { ...o, isactive: !o.isactive };
    await this.listService.update(listToUpdate);
    await this.overlayService.toast({
      message: `List "${o.name}" ${listToUpdate.isactive ? 'completed' : 'updated'}!`
    });
  }
}
