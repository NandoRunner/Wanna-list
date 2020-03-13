import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListSavePage } from './list-save.page';

const routes: Routes = [
  {
    path: '',
    component: ListSavePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ListSavePage]
})
export class ListSavePageModule {}
