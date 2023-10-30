import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAwaComponent } from './accueil-awa.component';

describe('AccueilAwaComponent', () => {
  let component: AccueilAwaComponent;
  let fixture: ComponentFixture<AccueilAwaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilAwaComponent]
    });
    fixture = TestBed.createComponent(AccueilAwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
