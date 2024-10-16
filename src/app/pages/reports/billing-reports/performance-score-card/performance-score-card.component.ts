import { formatDate } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { TableModule } from "primeng/table";
import { performanceScoreCardData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "performance-score-card",
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule, TableModule, MultiSelectModule],
  templateUrl: "./performance-score-card.component.html",
  styleUrl: "./performance-score-card.component.scss",
})
export class PerformanceScoreCardComponent {
  performanceData = performanceScoreCardData;
  filteredPerformanceData = performanceScoreCardData;

  currentMonth: string = formatDate(new Date(), "MMMM", "en");

  totalReferralsWeek1 = 0;
  totalAdmittedWeek1 = 0;
  totalReferralsWeek2 = 0;
  totalAdmittedWeek2 = 0;
  totalReferralsWeek3 = 0;
  totalAdmittedWeek3 = 0;
  totalReferralsWeek4 = 0;
  totalAdmittedWeek4 = 0;
  totalMonthlyReferrals = 0;
  totalMonthlyAdmitted = 0;

  years = [
    { label: "2024", value: "2024" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
  ];
  practices = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  selectedYear = "2024";
  selectedPractice = "Training Organization 1";
  selectedMonths: string[] = [this.currentMonth];

  ngOnInit() {
    this.filterPerformanceData();
    this.calculateTotals();
  }

  filterPerformanceData() {
    this.filteredPerformanceData = [...this.performanceData];

    if (this.selectedPractice) {
      this.filteredPerformanceData = this.filteredPerformanceData.filter(
        (data) => data.practice === this.selectedPractice,
      );
    }

    this.calculateTotals();
  }

  calculateTotals() {
    this.totalReferralsWeek1 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week1.referrals, 0);
    this.totalAdmittedWeek1 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week1.admitted, 0);

    this.totalReferralsWeek2 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week2.referrals, 0);
    this.totalAdmittedWeek2 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week2.admitted, 0);

    this.totalReferralsWeek3 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week3.referrals, 0);
    this.totalAdmittedWeek3 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week3.admitted, 0);

    this.totalReferralsWeek4 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week4.referrals, 0);
    this.totalAdmittedWeek4 = this.filteredPerformanceData.reduce((acc, data) => acc + data.week4.admitted, 0);

    this.totalMonthlyReferrals = this.filteredPerformanceData.reduce(
      (acc, data) => acc + data.monthlyTotal.referrals,
      0,
    );
    this.totalMonthlyAdmitted = this.filteredPerformanceData.reduce((acc, data) => acc + data.monthlyTotal.admitted, 0);
  }
}
