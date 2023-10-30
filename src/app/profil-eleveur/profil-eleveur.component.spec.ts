import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEleveurComponent } from './profil-eleveur.component';

describe('ProfilEleveurComponent', () => {
  let component: ProfilEleveurComponent;
  let fixture: ComponentFixture<ProfilEleveurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEleveurComponent]
    });
    fixture = TestBed.createComponent(ProfilEleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
