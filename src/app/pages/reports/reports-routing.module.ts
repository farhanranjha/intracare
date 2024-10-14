import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";

@NgModule({
  imports: [RouterModule.forChild([{ path: "admission-report", component: AdmissionReportsComponent }])],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
