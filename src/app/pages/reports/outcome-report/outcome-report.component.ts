import { CommonModule, formatDate } from "@angular/common";
import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ChartModule } from "primeng/chart";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { TableModule } from "primeng/table";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { outcomeReportData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "outcome-report",
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    CommonModule,
    TableComponent,
    CustomFilterComponent,
    ChartModule,
    DividerModule,
  ],
  templateUrl: "./outcome-report.component.html",
  styleUrl: "./outcome-report.component.scss",
})
export class OutcomeReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate!: TemplateRef<any>;

  outcomeData = outcomeReportData;
  filteredPerformanceData = this.outcomeData;

  columns: ColumnConfig[] = [];

  readingType = [
    { label: "Blood Pressure", value: "Blood Pressure" },
    { label: "Blood Glucose", value: "Blood Glucose" },
  ];

  practicesOptions = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  outcomeReportType = [
    { label: "Critical", value: "Critical" },
    { label: "High Risk", value: "High Risk" },
    { label: "Rising Risk", value: "Rising Risk" },
    { label: "HEDIS", value: "HEDIS" },
  ];

  selectedOutcomeReportType: string[];
  selectedReadingType = this.readingType[0].value;
  selectedPractice = this.practicesOptions[0].value;

  showClearButton: boolean = false;

  data: any;

  options: any;

  @ViewChild("chart") chart: any;

  originalData: number[] = [4, 3, 2, 1];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ["HEDIS", "Critical", "Rising Risk", "High Risk"],
      datasets: [
        {
          data: [4, 3, 2, 1],
          backgroundColor: ["#12B76A", "#F79009", "#F04438", "#F63D68"],
          color: ["#E6FCEF", "#FEF0C7", "#FFE1D3", "#FEE4E2"],
          hoverBackgroundColor: ["#32D583", "#FAB038", "#F66358", "#F63D68"],
          visibility: [true, true, true, true],
        },
      ],
    };

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
      },
    };
    this.columns = [
      {
        name: "Patient Name",
        field: "patientName",
        filterType: "none",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      {
        name: "Practice",
        field: "practiceName",
        filterType: "custom",
        filterTemplate: this.practiceNameFilter,
        sort: true,
      },
      {
        name: "DOB",
        field: "dob",
      },
      {
        name: "Date Range",
        field: "dateRange",
        filterType: "date",
        valueFormatter: this.formatToUSDate,
        sort: true,
      },
      {
        name: "Average",
        field: "average",
      },
      {
        name: "High to Low Reading",
        field: "highToLowReadings",
      },
    ];
  }

  toggleLabel(index: number) {
    const dataset = this.data.datasets[0];

    dataset.visibility[index] = !dataset.visibility[index];

    if (dataset.visibility[index]) {
      dataset.data[index] = this.originalData[index];
    } else {
      dataset.data[index] = 0;
    }

    this.chart.chart.update();

    const allHidden = dataset.visibility.every((visible) => !visible);
    if (allHidden) {
      dataset.data = [0, 0, 0, 0];
    }
  }

  formatToUSDate(dateRange) {
    if (dateRange && dateRange.start && dateRange.end) {
      return `${formatDate(dateRange.start, "YYYY/MM/dd", "en-US")} - ${formatDate(dateRange.end, "YYYY/MM/dd", "en-US")}`;
    }
    return "";
  }

  filterPerformanceData() {
    if (
      this.selectedReadingType !== this.readingType[0].value ||
      JSON.stringify(this.selectedOutcomeReportType) !== JSON.stringify([])
    ) {
      this.showClearButton = true;
    } else {
      this.showClearButton = false;
    }
  }

  clearFiltersToDefault() {
    this.selectedPractice = this.practicesOptions[0].value;
    this.selectedOutcomeReportType = [];
    this.showClearButton = false;
  }
}
