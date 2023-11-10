import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { MyNotificationService } from '../services/my-notification.service';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService,
    private notificationService: MyNotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // sto per fare chiamata
    // qui deve apparire il loader   
    this.spinnerService.showSpinner();
    return next.handle(request).pipe(
      delay(5000),
      catchError(  (e: HttpErrorResponse) => {
         this.spinnerService.hideSpinner();
         this.notificationService.showNotification
         ( { title: "Mio Title", text: "Errore",
              cssClass: "danger" });
 
         throw new Error("Errore gravissimo");
      }),
      tap( r => {
        // qui ho la response
        // qui deve sparire il loader
        this.spinnerService.hideSpinner();
        this.notificationService.showNotification
        ( { title: "Mio Title", text: "Chiamata ok",
             cssClass: "success" });
      })
    );
  }
}
