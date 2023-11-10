import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const firstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log('siamo nella guardia');
  const random = Math.random();

  if(random > 0.5) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

};
