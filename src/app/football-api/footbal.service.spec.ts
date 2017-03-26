import { TestBed, inject } from '@angular/core/testing';

import { FootbalService } from './footbal.service';

describe('FootbalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootbalService]
    });
  });

  it('should ...', inject([FootbalService], (service: FootbalService) => {
    expect(service).toBeTruthy();
  }));
});
