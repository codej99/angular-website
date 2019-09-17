import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptorService  implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('x-auth-token');
    var reqHeader: HttpHeaders = req.headers;
    if(token)
      reqHeader = reqHeader.set('x-auth-token', token);
    const newRequest = req.clone({headers: reqHeader});
    return next.handle(newRequest);
  }
}
