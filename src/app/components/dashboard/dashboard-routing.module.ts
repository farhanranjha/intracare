import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AddPatientComponent } from "../add-patient/add-patient.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: DashboardComponent },
      { path: "add-patient", component: AddPatientComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
