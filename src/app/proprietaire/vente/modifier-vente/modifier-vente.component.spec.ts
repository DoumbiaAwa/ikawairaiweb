import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVenteComponent } from './modifier-vente.component';

describe('ModifierVenteComponent', () => {
  let component: ModifierVenteComponent;
  let fixture: ComponentFixture<ModifierVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierVenteComponent]
    });
    fixture = TestBed.createComponent(ModifierVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
