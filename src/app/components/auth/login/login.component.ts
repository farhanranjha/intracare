import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthService } from "src/app/auth.service";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { add } from "src/app/store/actions/user.action";
import { selectAccessToken } from "src/app/store/selectors/user.selector";
import { CustomJwtPayload } from "src/app/token-payload.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ["remember"];

  password!: string;

  email: string;

  constructor(public layoutService: LayoutService , private authService: AuthService , private router:Router , private store:Store , ) {}


  ngOnInit(): void {
    this.store.select(selectAccessToken).subscribe((accessToken) => {
      if (accessToken) {
        this.router.navigate(['']);
      }
    });
  }


  Submit(){
    this.authService.login(this.email, this.password).subscribe(
      (response) => {

        const accessToken = response.access_token;
        const decodedToken: CustomJwtPayload | null = this.authService.decodeToken(accessToken);

          this.store.dispatch(add({
            user: {
              username: decodedToken.preferred_username || this.email,
              accessToken: accessToken,
              refreshToken: response.refresh_token,
              email: decodedToken.email,
              email_verified: decodedToken.email_verified,
              realm_access: decodedToken.realm_access,
              resource_access: decodedToken.resource_access,
              scope: decodedToken.scope,
              session_state: decodedToken.session_state,
              sid: decodedToken.sid,
            }
          }));

          this.router.navigate([''])
      },
      (error) => {
        console.error('Login failed', error);
        alert("Invalid Credentials")
      }
    );
  }

}
