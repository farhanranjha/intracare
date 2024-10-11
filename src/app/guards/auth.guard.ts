import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { selectRefreshToken } from "../store/selectors/user.selector";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectRefreshToken).pipe(
      take(1),
      map((token) => {
        const decodedToken = this.authService.decodeToken(token);
        const expiryTimestamp = decodedToken?.exp;
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (expiryTimestamp && expiryTimestamp > currentTimestamp) {
          return true;
        } else {
          this.router.navigate(["auth/login"]);
          return false;
        }
      }),
    );
  }
}
