import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccessComponent } from "./access/access.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "login", component: LoginComponent },
      { path: "error", component: ErrorComponent },
      { path: "access", component: AccessComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
