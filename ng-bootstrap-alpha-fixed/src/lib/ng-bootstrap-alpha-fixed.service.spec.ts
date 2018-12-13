import { TestBed } from '@angular/core/testing';

import { NgBootstrapAlphaFixedService } from './ng-bootstrap-alpha-fixed.service';

describe('NgBootstrapAlphaFixedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBootstrapAlphaFixedService = TestBed.get(NgBootstrapAlphaFixedService);
    expect(service).toBeTruthy();
  });
});
