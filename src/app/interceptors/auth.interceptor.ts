import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable, BehaviorSubject, of, throwError, forkJoin, merge } from "rxjs";
import { catchError, exhaustMap, filter, switchMap, take } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";
import { setAccessToken, remove, setRefreshToken } from "../store/actions/user.action";
import { selectUser } from "../store/selectors/user.selector";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private requestQueue: HttpRequest<any>[] = [];

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("/token")) {
      return next.handle(req);
    }

    return this.store.select(selectUser).pipe(
      take(1),
      switchMap((user) => {
        const accessToken = user?.accessToken;
        const refreshToken = user?.refreshToken;

        if (!accessToken || !refreshToken || this.isTokenExpired(refreshToken)) {
          return this.handleRefreshTokenExpired();
        } else if (this.isTokenExpired(accessToken)) {
          return this.handleRefreshToken(req, next);
        } else {
          return next.handle(this.addTokenToRequest(req, accessToken));
        }
      }),
    );
  }

  private handleRefreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((response: any) => {
          this.isRefreshing = false;
          const newAccessToken = response.access_token;
          this.store.dispatch(setAccessToken({ accessToken: newAccessToken }));
          this.refreshTokenSubject.next(newAccessToken);

          return next.handle(this.addTokenToRequest(req, newAccessToken));
        }),
        catchError((error) => {
          this.isRefreshing = false;
          return this.handleRefreshTokenExpired();
        }),
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => next.handle(this.addTokenToRequest(req, token!))),
      );
    }
  }

  private handleRefreshTokenExpired() {
    this.store.dispatch(remove());
    this.router.navigate(["/auth/login"]);
    return throwError(() => new Error("Refresh token expired, logging out"));
  }

  private addTokenToRequest(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
    if (!token) {
      return req;
    }
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private isTokenExpired(token: string): boolean {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
