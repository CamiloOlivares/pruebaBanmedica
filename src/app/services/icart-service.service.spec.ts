import { TestBed } from '@angular/core/testing';

import { IcartServiceService } from './icart-service.service';

describe('IcartServiceService', () => {
  let service: IcartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
