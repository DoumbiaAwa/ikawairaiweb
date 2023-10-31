import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilProprioComponent } from './accueil-proprio.component';

describe('AccueilProprioComponent', () => {
  let component: AccueilProprioComponent;
  let fixture: ComponentFixture<AccueilProprioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilProprioComponent]
    });
    fixture = TestBed.createComponent(AccueilProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
