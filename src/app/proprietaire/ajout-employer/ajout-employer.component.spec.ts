import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployerComponent } from './ajout-employer.component';

describe('AjoutEmployerComponent', () => {
  let component: AjoutEmployerComponent;
  let fixture: ComponentFixture<AjoutEmployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEmployerComponent]
    });
    fixture = TestBed.createComponent(AjoutEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
