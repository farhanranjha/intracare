import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";

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
              canActivate: [AuthGuard],
            },
          ],
        },
        {
          path: "auth",
          loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule),
          canActivate: [AuthGuard],
        },

        { path: "notfound", component: NotfoundComponent },
        { path: "**", redirectTo: "/notfound" },
      ],
      { scrollPositionRestoration: "enabled", anchorScrolling: "enabled", onSameUrlNavigation: "reload" },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
