import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/medicare/rpm-billing-report/rpm-billing-report.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },
      { path: "rpm-billing", component: RpmBillingReportComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
