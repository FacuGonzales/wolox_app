import { TestBed } from '@angular/core/testing';

import { TecnologiasDataService } from './tecnologias-data.service';

describe('TecnologiasDataService', () => {
  let service: TecnologiasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnologiasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
