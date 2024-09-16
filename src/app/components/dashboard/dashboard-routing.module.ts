import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PendingEnrollmentsComponent } from "../pendingenrollments/pendingenrollments.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: DashboardComponent },
      { path: "pending-enrollments", component: PendingEnrollmentsComponent },
    ])],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
