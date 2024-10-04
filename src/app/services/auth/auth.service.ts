import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, switchMap } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../../types/auth/token-payload.model";
import { Store } from "@ngrx/store";
import { selectRefreshToken } from "src/app/store/selectors/user.selector";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private issuerUri = import.meta.env.NG_APP_KEYCLOAK_ISSUER_URI;
  private clientId = import.meta.env.NG_APP_KEYCLOAK_CLIENT_ID;
  private scope = import.meta.env.NG_APP_KEYCLOAK_SCOPE;

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    const body = new URLSearchParams();
    body.set("client_id", this.clientId);
    body.set("grant_type", "password");
    body.set("username", email);
    body.set("password", password);
    body.set("scope", this.scope);

    return this.http.post(`${this.issuerUri}`, body.toString(), { headers });
  }

  refreshToken(): Observable<any> {
    return this.store.select(selectRefreshToken).pipe(
      switchMap((refreshToken) => {
        if (!refreshToken) {
          console.error("No refresh token found!");
          return null;
        }
        const headers = new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded",
        });

        const body = new URLSearchParams();
        body.set("client_id", this.clientId);
        body.set("grant_type", "refresh_token");
        body.set("refresh_token", refreshToken);

        return this.http.post(`${this.issuerUri}`, body.toString(), { headers });
      }),
    );
  }

  decodeToken(token: string): CustomJwtPayload | null {
    try {
      return jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  }
}
