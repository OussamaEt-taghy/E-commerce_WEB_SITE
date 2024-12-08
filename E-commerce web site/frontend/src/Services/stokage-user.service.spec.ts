import { TestBed } from '@angular/core/testing';

import { StokageUserService } from './stokage-user.service';

describe('StokageUserService', () => {
  let service: StokageUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokageUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
