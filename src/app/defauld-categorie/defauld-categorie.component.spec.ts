import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefauldCategorieComponent } from './defauld-categorie.component';

describe('DefauldCategorieComponent', () => {
  let component: DefauldCategorieComponent;
  let fixture: ComponentFixture<DefauldCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefauldCategorieComponent]
    });
    fixture = TestBed.createComponent(DefauldCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
