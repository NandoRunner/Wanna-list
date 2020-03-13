import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from 'src/app/core/services/auth.service';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService extends Firestore<List> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/lists`, ref =>
          ref.orderBy('isactive', 'desc').orderBy('name', 'asc')
        );
        return;
      }
      this.setCollection(null);
    });
  }
}
