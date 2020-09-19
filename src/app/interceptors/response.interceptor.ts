import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        public toastService: ToastrService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    return;
                }
            }),
            catchError((error: HttpErrorResponse) => {
                this.errorHandler(error);
                return throwError(error);
            })
        );
    }

    private errorHandler(error: HttpErrorResponse, type: string = 'error') {
        if (error.status) {
            switch (error.status) {
                case 400: {
                    this.toastService.error(error.error.message);
                }
                case 401: {
                    break;
                }
                case 403: {
                    break;
                }
                case 500: {
                    this.toastService.error(error.error.message);
                }
                case 0: {
                    break;
                }
            }
        }
    }
}
