import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from './token-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private issuerUri = import.meta.env.NG_APP_KEYCLOAK_ISSUER_URI;
  private clientId = import.meta.env.NG_APP_KEYCLOAK_CLIENT_ID;
  private scope = import.meta.env.NG_APP_KEYCLOAK_SCOPE;

  constructor(private http: HttpClient) {}
  

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    const body = new URLSearchParams();
    body.set('client_id', this.clientId);
    body.set('grant_type', 'password');
    body.set('username', email);
    body.set('password', password);
    body.set('scope', this.scope);

    return this.http.post(`${this.issuerUri}`, body.toString(), { headers });
  }

  decodeToken(token: string): CustomJwtPayload | null {
    try {
      return jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }


}