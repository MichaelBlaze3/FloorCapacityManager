import { TestBed, inject } from '@angular/core/testing';

import { FloorsService } from './floors.service';

describe('FloorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloorsService]
    });
  });

  it('should be created', inject([FloorsService], (service: FloorsService) => {
    expect(service).toBeTruthy();
  }));
});
