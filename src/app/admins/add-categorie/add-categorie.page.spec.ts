import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriePage } from './add-categorie.page';

describe('AddCategoriePage', () => {
  let component: AddCategoriePage;
  let fixture: ComponentFixture<AddCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
