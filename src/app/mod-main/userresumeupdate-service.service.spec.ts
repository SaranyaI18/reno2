import { TestBed } from '@angular/core/testing';

import { UserresumeupdateServiceService } from './userresumeupdate-service.service';

describe('UserresumeupdateServiceService', () => {
  let service: UserresumeupdateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserresumeupdateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
