import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendeursPage } from './list-vendeurs.page';

describe('ListVendeursPage', () => {
  let component: ListVendeursPage;
  let fixture: ComponentFixture<ListVendeursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVendeursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
