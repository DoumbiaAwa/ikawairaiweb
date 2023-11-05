import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVenteComponent } from './ajout-vente.component';

describe('AjoutVenteComponent', () => {
  let component: AjoutVenteComponent;
  let fixture: ComponentFixture<AjoutVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutVenteComponent]
    });
    fixture = TestBed.createComponent(AjoutVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
