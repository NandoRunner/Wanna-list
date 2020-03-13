import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSavePage } from './item-save.page';

describe('ItemSavePage', () => {
  let component: ItemSavePage;
  let fixture: ComponentFixture<ItemSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
