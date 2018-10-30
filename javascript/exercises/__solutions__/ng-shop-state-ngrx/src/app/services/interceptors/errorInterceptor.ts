import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

import {
  CommunicationError,
  RequestError,
  TimeoutError,
  NoConnectionError,
} from '../../errors';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      timeout(5_000),
      catchError((err) => castError(err)),
    );
  }
}

function castError(error: HttpErrorResponse | Error) {
  if (error instanceof Error) {
    if (error.name === 'TimeoutError') {
      return throwError(new TimeoutError());
    }
    return throwError(
      new CommunicationError('Failed to process server response', error),
    );
  }
  // HttpErrorResponse
  if (error.status === 0) {
    // A network error occurred (DNS, No Internet, ...)
    return throwError(new NoConnectionError());
  }
  // The backend returned an unsuccessful response code.
  return throwError(new RequestError(error.status, error.statusText, error));
}
