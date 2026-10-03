import { TestBed } from '@angular/core/testing';
import { Medicament } from './medicament';

describe('Medicament', () => {
  let service: Medicament;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medicament);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
