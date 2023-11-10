import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/users/login.service';

export const firstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
 // console.log('siamo nella guardia');
  //const random = Math.random();

  if(loginService.currentUser  
     && loginService.currentUser.roles
    .find(x => x === "Admin")) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
