import { TestBed } from '@angular/core/testing';

import { RestStoreService } from './rest-store.service';

describe('RestStoreService', () => {
  let service: RestStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
