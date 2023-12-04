import { TestBed } from '@angular/core/testing';

import { PasswordSetupService } from './password-setup.service';

describe('PasswordSetupService', () => {
  let service: PasswordSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
