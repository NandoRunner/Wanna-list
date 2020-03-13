import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListViewPage } from './list-view.page';

const routes: Routes = [
  {
    path: '',
    component: ListViewPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [ListViewPage]
})
export class ListViewPageModule {}
