import { TestBed } from '@angular/core/testing';

import { RecetteService } from './recette.service';

describe('RecetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetteService = TestBed.get(RecetteService);
    expect(service).toBeTruthy();
  });
});
