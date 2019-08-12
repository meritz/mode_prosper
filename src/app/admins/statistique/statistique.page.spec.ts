import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquePage } from './statistique.page';

describe('StatistiquePage', () => {
  let component: StatistiquePage;
  let fixture: ComponentFixture<StatistiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
