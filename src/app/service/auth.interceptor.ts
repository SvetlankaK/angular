import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.auth.token
        }
      });
    }
    return next.handle(req)
      .pipe(
        tap(() => {
          console.log('Intercept');
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('[Interceptor Error]: ', error);
          if (error.status === 401) {
            console.log('401');
            this.auth.logout();
            this.router.navigate(['/error/401']);
          }
          if (error.status === 403) {
            console.log('403');
            this.auth.logout();
            this.router.navigate(['/error/403']);
          }
          return throwError(error);
        })
      );
  }
}