import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Auth0Service } from '../../security/services/auth0.service';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpAuth0TokenInterceptor implements HttpInterceptor {
  constructor(private auth: Auth0Service) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.getTokenSilently$().pipe(
      mergeMap(token => {
        const tokenReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(tokenReq);
      }),
      catchError(err => throwError(err))
    );
  }
}
