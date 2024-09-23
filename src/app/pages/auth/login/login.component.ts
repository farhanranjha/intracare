import { Component, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Store } from "@ngrx/store";
import { add } from "src/app/store/actions/user.action";
import { selectAccessToken } from "src/app/store/selectors/user.selector";
import { CustomJwtPayload } from "src/app/token-payload.model";
import { toSignal } from "@angular/core/rxjs-interop"; // Import helper for signal conversion
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { catchError, map, of } from "rxjs";

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
  imports: [FormsModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule],
  standalone: true,
  providers: [LayoutService, AuthService, Store],
})
export class LoginComponent {
  valCheck = ["remember"];
  password = signal<string>("");
  email = signal<string>("");

  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);

  accessToken = toSignal(this.store.select(selectAccessToken));

  ngOnInit() {
    if (this.accessToken()) {
      this.router.navigate([""]);
    }
  }

  submit() {
    this.authService
      .login(this.email(), this.password())
      .pipe(
        map((response) => {
          const accessToken = response.access_token;
          const decodedToken: CustomJwtPayload | null = this.authService.decodeToken(accessToken);

          this.store.dispatch(
            add({
              user: {
                username: decodedToken?.preferred_username || this.email(),
                accessToken: accessToken,
                refreshToken: response.refresh_token,
                email: decodedToken?.email,
                email_verified: decodedToken?.email_verified,
                realm_access: decodedToken?.realm_access,
                resource_access: decodedToken?.resource_access,
                scope: decodedToken?.scope,
                session_state: decodedToken?.session_state,
                sid: decodedToken?.sid,
              },
            }),
          );

          this.router.navigate([""]);
        }),
        catchError(() => {
          alert("Invalid Credentials");
          return of(null);
        }),
      )
      .subscribe();
  }
}
