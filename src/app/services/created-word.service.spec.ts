import { TestBed } from '@angular/core/testing';

import { CreatedWordService } from './created-word.service';

describe('CreatedWordService', () => {
  let service: CreatedWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
