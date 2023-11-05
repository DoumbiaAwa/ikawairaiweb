import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreComponent } from './barre.component';

describe('BarreComponent', () => {
  let component: BarreComponent;
  let fixture: ComponentFixture<BarreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarreComponent]
    });
    fixture = TestBed.createComponent(BarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
