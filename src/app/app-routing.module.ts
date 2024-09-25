import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from "./guards/auth.guard";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LoginComponent } from "./pages/login/login.component";
import { ErrorComponent } from "./pages/error/error.component";
import { AccessComponent } from "./pages/access/access.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          component: AppLayoutComponent,
          children: [
            {
              path: "",
              loadChildren: () => import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
              canActivate: [AuthGuard],
            },
            {
              path: "patient",
              loadChildren: () => import("./pages/patient/patient.module").then((m) => m.PatientModule),
            },
          ],
        },

        { path: "login", component: LoginComponent },
        { path: "error", component: ErrorComponent },
        { path: "access", component: AccessComponent },
        { path: "notfound", component: NotfoundComponent },
        { path: "**", redirectTo: "/notfound" },
      ],
      { scrollPositionRestoration: "enabled", anchorScrolling: "enabled", onSameUrlNavigation: "reload" },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
