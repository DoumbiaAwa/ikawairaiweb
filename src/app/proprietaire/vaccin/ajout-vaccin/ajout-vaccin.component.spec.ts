import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVaccinComponent } from './ajout-vaccin.component';

describe('AjoutVaccinComponent', () => {
  let component: AjoutVaccinComponent;
  let fixture: ComponentFixture<AjoutVaccinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutVaccinComponent]
    });
    fixture = TestBed.createComponent(AjoutVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
