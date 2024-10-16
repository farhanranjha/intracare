import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/medicare/rpm-billing-report/rpm-billing-report.component";
import { CareManagementReadingReportComponent } from "./billing-reports/care-management-reading-report/care-management-reading-report.component";
import { CcmBillingReportComponent } from "./billing-reports/medicare/ccm-billing-report/ccm-billing-report.component";
import { MedicaidBillingReportComponent } from "./billing-reports/medicaid-billing-report/medicaid-billing-report.component";
import { PerformanceScoreCardComponent } from "./billing-reports/performance-score-card/performance-score-card.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },
      { path: "rpm-billing", component: RpmBillingReportComponent },
      { path: "readings-compliance", component: CareManagementReadingReportComponent },
      { path: "ccm-billing", component: CcmBillingReportComponent },
      { path: "medicaid-billing", component: MedicaidBillingReportComponent },
      { path: "readings-compliance", component: CareManagementReadingReportComponent },
      { path: "performance-score-card", component: PerformanceScoreCardComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
