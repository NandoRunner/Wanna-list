import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './pages/item-save/item-save.module#ItemSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/item-save/item-save.module#ItemSavePageModule'
      },
      {
        path: '',
        loadChildren: './pages/item-view/item-view.module#ItemViewPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
