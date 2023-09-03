import { TestBed } from '@angular/core/testing';

import { BillionaireServiceService } from './billionaire-service.service';

describe('BillionaireServiceService', () => {
  let service: BillionaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillionaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
