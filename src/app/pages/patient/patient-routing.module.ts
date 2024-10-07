import { PatientDashboardModule } from "./patient-dashboard/patient-dashboard.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { PendingEnrollmentsComponent } from "./pending-enrollments/pending-enrollments.component";
import { PendingReadingsComponent } from "./pending-readings/pending-readings.component";
import { ReadingsNotAddressedComponent } from "./readings-not-addressed/readings-not-addressed.component";
import { PatientChartComponent } from "./patient-chart/patient-chart.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "add", component: AddPatientComponent },
      { path: "pending-enrollments", component: PendingEnrollmentsComponent },
      { path: "pending-readings", component: PendingReadingsComponent },
      { path: "readings-not-addressed", component: ReadingsNotAddressedComponent },
      {
        path: ":id",
        loadChildren: () =>
          import("./patient-dashboard/patient-dashboard.module").then((m) => m.PatientDashboardModule),
      },
      { path: "ui/secondary", component: PatientChartComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
