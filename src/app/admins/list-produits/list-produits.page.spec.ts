import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsPage } from './list-produits.page';

describe('ListProduitsPage', () => {
  let component: ListProduitsPage;
  let fixture: ComponentFixture<ListProduitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProduitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
