import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { PendingEnrollmentsComponent } from "./pending-enrollments/pending-enrollments.component";
import { PendingReadingsComponent } from "./pending-readings/pending-readings.component";
import { ReadingsNotAddressedComponent } from "./readings-not-addressed/readings-not-addressed.component";
import { PatientChartComponent } from "./patient-chart/patient-chart.component";
import { PatientDashboardComponent } from "./patient-dashboard/patient-dashboard.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "add", component: AddPatientComponent },
      { path: "pending-enrollments", component: PendingEnrollmentsComponent },
      { path: "pending-readings", component: PendingReadingsComponent },
      { path: "readings-not-addressed", component: ReadingsNotAddressedComponent },
      { path: ":id", component: PatientDashboardComponent },
      { path: "ui/secondary", component: PatientChartComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
