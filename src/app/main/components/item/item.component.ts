import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {
  @Input() item: Item;
  // @Output() done = new EventEmitter<Item>();
  @Output() update = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();
}
