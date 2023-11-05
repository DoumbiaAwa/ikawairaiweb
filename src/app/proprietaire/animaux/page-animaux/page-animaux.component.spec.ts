import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimauxComponent } from './page-animaux.component';

describe('PageAnimauxComponent', () => {
  let component: PageAnimauxComponent;
  let fixture: ComponentFixture<PageAnimauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAnimauxComponent]
    });
    fixture = TestBed.createComponent(PageAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
