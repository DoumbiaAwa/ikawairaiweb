import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProprioComponent } from './employer-proprio.component';

describe('EmployerProprioComponent', () => {
  let component: EmployerProprioComponent;
  let fixture: ComponentFixture<EmployerProprioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerProprioComponent]
    });
    fixture = TestBed.createComponent(EmployerProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
