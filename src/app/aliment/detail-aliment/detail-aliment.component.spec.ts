import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlimentComponent } from './detail-aliment.component';

describe('DetailAlimentComponent', () => {
  let component: DetailAlimentComponent;
  let fixture: ComponentFixture<DetailAlimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAlimentComponent]
    });
    fixture = TestBed.createComponent(DetailAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
