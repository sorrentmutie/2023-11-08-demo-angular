import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = "XXXXXXXX";
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const newRequest = request.clone(
      { headers: request.headers.set("Authorization", "Bearer "+ this.token)
    });


    console.log('Sono nel primo interceptor');
    console.log(request);
    return next.handle(newRequest)
    .pipe(
      tap(evento => {
        if(evento instanceof HttpResponse){
          console.log(evento);
        }
    }),
    catchError( (e: HttpErrorResponse) => {
      
      throw new Error("Errore gravissimo");
    }))
  }
}
