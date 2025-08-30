import { TestBed } from '@angular/core/testing';

import { LogoutModalService } from './logout-modal.service';

describe('LogoutModalService', () => {
  let service: LogoutModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
