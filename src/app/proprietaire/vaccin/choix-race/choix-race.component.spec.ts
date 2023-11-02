import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixRaceComponent } from './choix-race.component';

describe('ChoixRaceComponent', () => {
  let component: ChoixRaceComponent;
  let fixture: ComponentFixture<ChoixRaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixRaceComponent]
    });
    fixture = TestBed.createComponent(ChoixRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
