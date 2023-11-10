import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { RandomUserResponse, Result } from '../random-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.css']
})
export class RandomUserPageComponent {
    // data: Result[] | undefined = undefined;
   //  mydata: Observable<Result[]> | undefined = undefined;

     constructor(public service: RandomUsersService) {
        // this.service.getBetterRandomUsers('male')
        // .subscribe
        // (data => {this.data = data});
      //  this.mydata = 
          //  this.service.getBetterRandomUsers('male');
     }
}
