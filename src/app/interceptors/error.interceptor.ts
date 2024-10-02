import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, switchMap, take, filter } from "rxjs/operators";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { remove } from "../store/actions/user.action";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.dispatch(remove());
          this.router.navigate(["auth/login"]);
        }
        return throwError(() => error);
      }),
    );
  }
}
