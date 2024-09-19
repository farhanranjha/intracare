import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AddPatientComponent } from "../add-patient/add-patient.component";
import { PendingEnrollmentsComponent } from "../pendingenrollments/pendingenrollments.component";
import { PendingReadingsComponent } from "../pending-readings/pending-readings.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: DashboardComponent },
      { path: "pending-enrollments", component: PendingEnrollmentsComponent },
      { path: "add-patient", component: AddPatientComponent },
      { path: "pending-readings", component: PendingReadingsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
