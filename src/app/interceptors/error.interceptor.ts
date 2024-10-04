import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { selectAccessToken } from "../store/selectors/user.selector";
import { Router } from "@angular/router";
import { remove, setAccessToken } from "../store/actions/user.action";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return this.handle401Error(req, next);
        }
        const error = err.error?.message || err.statusText;
        return throwError(() => err);
      }),
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((response: any) => {
          this.isRefreshing = false;
          const newAccessToken = response?.access_token;

          if (newAccessToken) {
            this.refreshTokenSubject.next(newAccessToken);
            this.store.dispatch(setAccessToken({ accessToken: newAccessToken }));
            const newRequest = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return next.handle(newRequest);
          }

          return throwError(() => new Error("Failed to refresh access token"));
        }),
        catchError((error: any) => {
          this.isRefreshing = false;

          if (error.status === 400) {
            this.handleRefreshTokenError();
          }

          return throwError(() => error);
        }),
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((newAccessToken: string | null) => {
          if (newAccessToken) {
            const newRequest = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return next.handle(newRequest);
          }
          return throwError(() => new Error("Failed to retry request after refresh"));
        }),
      );
    }
  }
  private handleRefreshTokenError(): void {
    this.store.dispatch(remove());
    this.router.navigate(["/auth/login"]);
  }
}
