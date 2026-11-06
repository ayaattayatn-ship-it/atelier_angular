import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { medicamentGuard } from './medicament-guard';

describe('medicamentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => medicamentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
