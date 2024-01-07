import { TestBed } from '@angular/core/testing';

import { WarcraftService } from './warcraft.service';

describe('WarcarftService', () => {
  let service: WarcraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarcraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
