import { Component } from '@angular/core';
import { LoginService } from '../users/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

   loggedIn = false;
   constructor(private loginService: LoginService){

   }

   login(){
    this.loginService.login().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
       if(loggedIn == true) {
     
       } else {

       }
    })
   }
}
