import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';
import { inject } from '@angular/core';

export const medicamentGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  if (authService.isAdmin())
    return true;
  else {
    router.navigate(['app-forbidden']);
    return false;
  }

};
