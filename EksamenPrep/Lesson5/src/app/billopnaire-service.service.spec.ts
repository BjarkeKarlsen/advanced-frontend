import { TestBed } from '@angular/core/testing';

import { BillionaireServiceService } from './billopnaire-service.service';

describe('BillopnaireServiceService', () => {
  let service: BillionaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillionaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
