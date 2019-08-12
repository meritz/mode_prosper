import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatVentesPage } from './etat-ventes.page';

describe('EtatVentesPage', () => {
  let component: EtatVentesPage;
  let fixture: ComponentFixture<EtatVentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatVentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatVentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
