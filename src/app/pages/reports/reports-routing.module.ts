import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/medicare/rpm-billing-report/rpm-billing-report.component";
import { CcmBillingReportComponent } from "./billing-reports/medicare/ccm-billing-report/ccm-billing-report.component";
import { MedicaidBillingReportComponent } from "./billing-reports/medicaid-billing-report/medicaid-billing-report.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },
      { path: "rpm-billing", component: RpmBillingReportComponent },
      { path: "ccm-billing", component: CcmBillingReportComponent },
      { path: "medicaid-billing", component: MedicaidBillingReportComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
