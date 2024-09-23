import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from "./guards/auth.guard";
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
          ],
        },
        { path: "auth", loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule) },
        { path: "notfound", component: NotfoundComponent },
        { path: "**", redirectTo: "/notfound" },
      ],
      { scrollPositionRestoration: "enabled", anchorScrolling: "enabled", onSameUrlNavigation: "reload" },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
