import { TestBed } from '@angular/core/testing';

import { AcserviceService } from './acservice.service';

describe('AcserviceService', () => {
  let service: AcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
