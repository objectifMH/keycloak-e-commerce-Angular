import { TestBed } from '@angular/core/testing';

import { KeycloacSecuriteService } from './keycloac-securite.service';

describe('KeycloacSecuriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloacSecuriteService = TestBed.get(KeycloacSecuriteService);
    expect(service).toBeTruthy();
  });
});
