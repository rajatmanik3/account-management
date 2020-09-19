import {
    HttpHandler,
    HttpEvent,
    HttpRequest,
    HttpInterceptor
  } from "@angular/common/http";
  import { Observable } from "rxjs/Observable";
  import { Injectable } from "@angular/core";
  import { CookieService } from "ngx-cookie-service";
  @Injectable()
  export class RequestInterceptor implements HttpInterceptor {
    constructor(
        public _cs: CookieService
    ) { }
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const authToken = '';
      request = request.clone({
        setHeaders: {
          'x-access-token': authToken
        }
      });
      return next.handle(request);
    }
  }
