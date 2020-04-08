import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloacSecuriteService } from './keycloac-securite.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private kcService: KeycloacSecuriteService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(" Request http Interceptor ... " ,  req);
    if (!this.kcService.kc.authenticated)
      return next.handle(req);

    let request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.kcService.kc.token
      }
    });
    console.log("Req apres seatHeaders ",  request);
    return next.handle(request);
  }
}
