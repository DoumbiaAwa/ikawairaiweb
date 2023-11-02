import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVaccinComponent } from './detail-vaccin.component';

describe('DetailVaccinComponent', () => {
  let component: DetailVaccinComponent;
  let fixture: ComponentFixture<DetailVaccinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailVaccinComponent]
    });
    fixture = TestBed.createComponent(DetailVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
