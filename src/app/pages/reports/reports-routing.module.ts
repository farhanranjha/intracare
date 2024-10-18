import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdmissionReportsComponent } from "./admission-reports/admission-reports.component";
import { NonAdherenceComponent } from "./non-adherence/non-adherence.component";
import { RpmBillingReportComponent } from "./billing-reports/components/medicare/components/rpm-billing-report/rpm-billing-report.component";
import { CareManagementReadingReportComponent } from "./care-management/components/care-management-reading-report/care-management-reading-report.component";
import { CcmBillingReportComponent } from "./billing-reports/components/medicare/components/ccm-billing-report/ccm-billing-report.component";
import { MedicaidBillingReportComponent } from "./billing-reports/components/medicaid/components/medicaid-billing-report/medicaid-billing-report.component";
import { PerformanceScoreCardComponent } from "./score-card/components/performance-score-card/performance-score-card.component";
import { ReferralsScoreCardComponent } from "./score-card/components/referrals-score-card/referrals-score-card.component";
import { ProviderScoreCardComponent } from "./score-card/components/provider-score-card/provider-score-card.component";
import { BillingReportsComponent } from "./billing-reports/billing-reports.component";
import { MedicareComponent } from "./billing-reports/components/medicare/medicare.component";
import { MedicaidComponent } from "./billing-reports/components/medicaid/medicaid.component";
import { CareManagementComponent } from "./care-management/care-management.component";
import { ScoreCardComponent } from "./score-card/score-card.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "admission-report", component: AdmissionReportsComponent },
      { path: "non-adherence", component: NonAdherenceComponent },

      {
        path: "score-card",
        component: ScoreCardComponent,
        children: [
          { path: "", redirectTo: "performance", pathMatch: "full" },
          { path: "performance", component: PerformanceScoreCardComponent },
          { path: "referrals", component: ReferralsScoreCardComponent },
          { path: "provider", component: ProviderScoreCardComponent },
        ],
      },
      {
        path: "care-management",
        component: CareManagementComponent,
        children: [
          { path: "", redirectTo: "readings-compliance", pathMatch: "full" },
          { path: "readings-compliance", component: CareManagementReadingReportComponent },
        ],
      },
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
