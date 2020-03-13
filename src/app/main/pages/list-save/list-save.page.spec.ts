import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSavePage } from './list-save.page';

describe('ListSavePage', () => {
  let component: ListSavePage;
  let fixture: ComponentFixture<ListSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
