import { CommonModule, formatDate } from "@angular/common";
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
  imports: [ButtonModule, DropdownModule, FormsModule, TableModule, MultiSelectModule, CommonModule],
  templateUrl: "./performance-score-card.component.html",
  styleUrl: "./performance-score-card.component.scss",
})
export class PerformanceScoreCardComponent {
  performanceData = performanceScoreCardData;
  filteredPerformanceData = performanceScoreCardData;

  currentMonth: string = formatDate(new Date(), "MMMM", "en");
  currentYear: string = formatDate(new Date(), "YYYY", "en");

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

  showClearButton: boolean = false;

  filterPerformanceData() {
    if (
      this.selectedYear !== this.currentYear ||
      this.selectedPractice !== this.practices[0].value ||
      JSON.stringify(this.selectedMonths) !== JSON.stringify([this.currentMonth])
    ) {
      this.showClearButton = true;
    } else {
      this.showClearButton = false;
    }
  }

  clearFiltersToDefault() {
    this.selectedYear = this.currentYear;
    this.selectedPractice = this.practices[0].value;
    this.selectedMonths = [this.currentMonth];
    this.showClearButton = false;
  }
}
