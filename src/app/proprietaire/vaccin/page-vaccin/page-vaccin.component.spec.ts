import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVaccinComponent } from './page-vaccin.component';

describe('PageVaccinComponent', () => {
  let component: PageVaccinComponent;
  let fixture: ComponentFixture<PageVaccinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageVaccinComponent]
    });
    fixture = TestBed.createComponent(PageVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
