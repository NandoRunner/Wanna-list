import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemViewPage } from './item-view.page';

describe('ItemViewPage', () => {
  let component: ItemViewPage;
  let fixture: ComponentFixture<ItemViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
