import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
    const router :Router= inject(Router);
  const snackBar :MatSnackBar= inject(MatSnackBar);

  const role = localStorage.getItem('role');

  if (role === 'admin') {
    return true; 
  }

  router.navigate(['/admin']);
  return false; 
};
