import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/medicare/components/rpm-billing-report/rpm-billing-report.component";
import { CareManagementReadingReportComponent } from "./billing-reports/care-management-reading-report/care-management-reading-report.component";
import { CcmBillingReportComponent } from "./billing-reports/medicare/components/ccm-billing-report/ccm-billing-report.component";
import { MedicaidBillingReportComponent } from "./billing-reports/medicaid/components/medicaid-billing-report/medicaid-billing-report.component";
import { PerformanceScoreCardComponent } from "./billing-reports/performance-score-card/performance-score-card.component";
import { ReferralsScoreCardComponent } from "./billing-reports/referrals-score-card/referrals-score-card.component";
import { ProviderScoreCardComponent } from "./billing-reports/provider-score-card/provider-score-card.component";
import { BillingReportsComponent } from "./billing-reports/billing-reports.component";
import { MedicareComponent } from "./billing-reports/medicare/medicare.component";
import { MedicaidComponent } from "./billing-reports/medicaid/medicaid.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },
      { path: "readings-compliance", component: CareManagementReadingReportComponent },
      { path: "readings-compliance", component: CareManagementReadingReportComponent },
      { path: "performance-score-card", component: PerformanceScoreCardComponent },
      { path: "referrals-score-card", component: ReferralsScoreCardComponent },
      { path: "provider-score-card", component: ProviderScoreCardComponent },
      {
        path: "billing-reports",
        component: BillingReportsComponent,
        children: [
          { path: "", redirectTo: "medicare", pathMatch: "full" },
          {
            path: "medicare",
            component: MedicareComponent,
            children: [
              { path: "", redirectTo: "rpm-billing", pathMatch: "full" },
              { path: "rpm-billing", component: RpmBillingReportComponent },
              { path: "ccm-billing", component: CcmBillingReportComponent },
            ],
          },
          {
            path: "medicaid",
            component: MedicaidComponent,
            children: [
              { path: "", redirectTo: "rpm-billing", pathMatch: "full" },
              { path: "rpm-billing", component: MedicaidBillingReportComponent },
            ],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
