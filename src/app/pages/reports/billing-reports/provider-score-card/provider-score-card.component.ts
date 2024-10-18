import { CommonModule, formatDate } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { TableModule } from "primeng/table";
import { TableComponent } from "src/app/components/table/table.component";
import { PatientDashboardTableHeightService } from "src/app/services/patient-dashboard-table-height/patient-dashboard-table-height.service";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { providerScoreData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-provider-score-card",
  standalone: true,
  imports: [ButtonModule, DropdownModule, FormsModule, TableModule, MultiSelectModule, CommonModule, TableComponent],
  templateUrl: "./provider-score-card.component.html",
  styleUrl: "./provider-score-card.component.scss",
})
export class ProviderScoreCardComponent {
  providerData = providerScoreData;
  filteredProviderData = providerScoreData[2024];
  currentYear: string = formatDate(new Date(), "YYYY", "en");

  years = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
  ];
  practices = [{ label: "Training Organization 1", value: "Training Organization 1" }];

  selectedYear = "2024";
  selectedPractice = "Training Organization 1";

  showClearButton: boolean = false;

  columns: ColumnConfig[] = [];

  scrollHeight: string = "100%";

  constructor(private heightService: PatientDashboardTableHeightService) {}

  ngOnInit() {
    this.updateColumns();
  }

  filterPerformanceData() {
    const yearData = providerScoreData[this.selectedYear];
    this.filteredProviderData = yearData;

    this.updateColumns();

    if (this.selectedYear !== this.currentYear || this.selectedPractice !== this.practices[0].value) {
      this.showClearButton = true;
    } else {
      this.showClearButton = false;
    }
  }

  clearFiltersToDefault() {
    this.selectedYear = this.currentYear;
    this.selectedPractice = this.practices[0].value;
    this.showClearButton = false;
    this.filterPerformanceData();
  }

  updateColumns() {
    if (this.selectedYear === this.currentYear) {
      this.columns = [
        { name: "Category", field: "category" },
        { name: "Goal", field: "goal" },
        { name: "Sept", field: "sept" },
        { name: "Oct", field: "oct" },
      ];
      this.heightService.scrollHeight$.subscribe((height: string) => {
        this.scrollHeight = height;
      });
    } else {
      this.columns = [
        { name: "Category", field: "category" },
        { name: "Goal", field: "goal" },
      ];
    }
  }
}
