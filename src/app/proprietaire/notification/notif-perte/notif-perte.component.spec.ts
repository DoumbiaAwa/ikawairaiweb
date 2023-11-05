import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPerteComponent } from './notif-perte.component';

describe('NotifPerteComponent', () => {
  let component: NotifPerteComponent;
  let fixture: ComponentFixture<NotifPerteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifPerteComponent]
    });
    fixture = TestBed.createComponent(NotifPerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
