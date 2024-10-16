import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { performanceScoreCardData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "performance-score-card",
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule],
  templateUrl: "./performance-score-card.component.html",
  styleUrl: "./performance-score-card.component.scss",
})
export class PerformanceScoreCardComponent {
  performanceData = performanceScoreCardData;
  // totalPerformance = totalPerformanceScoreCard;

  years = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
  ];
  practices = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  months = [{ label: "October", value: "October" }];

  selectedYear = "2024";
  selectedPractice = "Training Organization 1";
  selectedMonth = "October";

  filterPerformanceData() {
    // Reset the data first
    this.performanceData = performanceScoreCardData;

    // Apply year filter
    if (this.selectedYear) {
      // this.performanceData = this.performanceData.filter((data) => data.year === this.selectedYear);
    }

    // Apply practice filter
    if (this.selectedPractice) {
      this.performanceData = this.performanceData.filter((data) => data.practice === this.selectedPractice);
    }

    // Apply month filter
    if (this.selectedMonth) {
      // this.performanceData = this.performanceData.filter((data) => data.month === this.selectedMonth);
    }

    // Calculate new totals after filtering
    this.calculateTotalPerformance();
  }

  calculateTotalPerformance() {
    const totalReferralsWeek1 = this.performanceData.reduce((acc, data) => acc + data.week1.referrals, 0);
    const totalAdmittedWeek1 = this.performanceData.reduce((acc, data) => acc + data.week1.admitted, 0);

    const totalReferralsWeek2 = this.performanceData.reduce((acc, data) => acc + data.week2.referrals, 0);
    const totalAdmittedWeek2 = this.performanceData.reduce((acc, data) => acc + data.week2.admitted, 0);

    const totalReferralsWeek3 = this.performanceData.reduce((acc, data) => acc + data.week3.referrals, 0);
    const totalAdmittedWeek3 = this.performanceData.reduce((acc, data) => acc + data.week3.admitted, 0);

    const totalReferralsWeek4 = this.performanceData.reduce((acc, data) => acc + data.week4.referrals, 0);
    const totalAdmittedWeek4 = this.performanceData.reduce((acc, data) => acc + data.week4.admitted, 0);

    const totalReferralsMonthly = this.performanceData.reduce((acc, data) => acc + data.monthlyTotal.referrals, 0);
    const totalAdmittedMonthly = this.performanceData.reduce((acc, data) => acc + data.monthlyTotal.admitted, 0);

    const totalConversionRates = this.performanceData.reduce(
      (acc, data) => acc + parseFloat(data.conversionRate.replace("%", "")),
      0,
    );

    return {
      practice: "Total",
      week1: { referrals: totalReferralsWeek1, admitted: totalAdmittedWeek1 },
      week2: { referrals: totalReferralsWeek2, admitted: totalAdmittedWeek2 },
      week3: { referrals: totalReferralsWeek3, admitted: totalAdmittedWeek3 },
      week4: { referrals: totalReferralsWeek4, admitted: totalAdmittedWeek4 },
      monthlyTotal: { referrals: totalReferralsMonthly, admitted: totalAdmittedMonthly },
      conversionRate: (totalConversionRates / this.performanceData.length).toFixed(2) + "%",
    };
  }
}
