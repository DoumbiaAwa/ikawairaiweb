import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlimentComponent } from './page-aliment.component';

describe('PageAlimentComponent', () => {
  let component: PageAlimentComponent;
  let fixture: ComponentFixture<PageAlimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAlimentComponent]
    });
    fixture = TestBed.createComponent(PageAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
