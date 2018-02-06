import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpotifyInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headers = req.headers.set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq)
          .catch(err => Observable.throw(err)) as any;
  }

}
