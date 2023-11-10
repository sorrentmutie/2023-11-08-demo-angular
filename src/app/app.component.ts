import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { MyNotificationService } from './shared/services/my-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';

  constructor(private toastr: ToastrService,
    private notificationService: MyNotificationService){
   // this.toastr.success('Hello world!', 'Toastr fun!');
   this.notificationService.notifications$?.subscribe(
    n => {
      if(n.cssClass === "danger") {
        this.toastr.error(n.text, n.title);
      }
      else if(n.cssClass === "success") {
        this.toastr.success(n.text, n.title);
      }
    }
   )
  }
}
