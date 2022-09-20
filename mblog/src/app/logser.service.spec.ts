import { TestBed } from '@angular/core/testing';

import { LogserService } from './logser.service';

describe('LogserService', () => {
  let service: LogserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
