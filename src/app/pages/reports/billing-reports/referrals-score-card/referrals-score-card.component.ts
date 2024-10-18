import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { TableModule } from "primeng/table";
import { referralsScoreCardData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "referrals-score-card",
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule, TableModule, CalendarModule, CommonModule],
  templateUrl: "./referrals-score-card.component.html",
  styleUrl: "./referrals-score-card.component.scss",
})
export class ReferralsScoreCardComponent {
  dateRange: Date[];
  referralsScoreData = referralsScoreCardData;

  practices = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  provider = [
    { label: "Provier A", value: "Provier A" },
    { label: "Provier B", value: "Provier B" },
  ];

  selectedPractice = "Training Organization 1";
  selectedprovider = "Provier A";

  showClearButton: boolean = false;

  filterPerformanceData() {
    if (this.selectedprovider !== this.provider[0].value || this.selectedPractice !== this.practices[0].value) {
      this.showClearButton = true;
    } else {
      this.showClearButton = false;
    }
  }

  clearFiltersToDefault() {
    this.selectedPractice = this.practices[0].value;
    this.selectedprovider = this.provider[0].value;
    this.showClearButton = false;
  }
}
