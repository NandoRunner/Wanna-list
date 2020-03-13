import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ItemComponent, ListComponent],
  imports: [SharedModule],
  exports: [ItemComponent, ListComponent]
})
export class ComponentsModule {}
