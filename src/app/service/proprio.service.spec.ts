import { TestBed } from '@angular/core/testing';

import { ProprioService } from './proprio.service';

describe('ProprioService', () => {
  let service: ProprioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProprioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
