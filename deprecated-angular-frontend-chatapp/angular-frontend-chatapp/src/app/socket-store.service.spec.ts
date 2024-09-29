import { TestBed } from '@angular/core/testing';

import { SocketStoreService } from './socket-store.service';

describe('SocketStoreService', () => {
  let service: SocketStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
