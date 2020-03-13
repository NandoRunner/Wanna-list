import { Component, EventEmitter, Output, Input } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: List;
  @Output() isactive = new EventEmitter<List>();
  @Output() update = new EventEmitter<List>();
  @Output() delete = new EventEmitter<List>();
}
