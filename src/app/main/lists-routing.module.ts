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
        loadChildren: './pages/list-save/list-save.module#ListSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/list-save/list-save.module#ListSavePageModule'
      },
      {
        path: '',
        loadChildren: './pages/list-view/list-view.module#ListViewPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
