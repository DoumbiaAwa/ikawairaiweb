import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAnimalComponent } from './ajout-animal.component';

describe('AjoutAnimalComponent', () => {
  let component: AjoutAnimalComponent;
  let fixture: ComponentFixture<AjoutAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutAnimalComponent]
    });
    fixture = TestBed.createComponent(AjoutAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
