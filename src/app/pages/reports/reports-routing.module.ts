import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/medicare/rpm-billing-report/rpm-billing-report.component";
import { CareManagementReadingReportComponent } from "./billing-reports/care-management-reading-report/care-management-reading-report.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },
      { path: "rpm-billing", component: RpmBillingReportComponent },
      { path: "readings-compliance", component: CareManagementReadingReportComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
