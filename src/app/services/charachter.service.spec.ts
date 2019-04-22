import { TestBed } from '@angular/core/testing';

import { CharachterService } from './charachter.service';

describe('CharachterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharachterService = TestBed.get(CharachterService);
    expect(service).toBeTruthy();
  });
});
