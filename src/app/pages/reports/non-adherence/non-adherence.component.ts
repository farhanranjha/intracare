import { Component, TemplateRef, ViewChild } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { nonAdherenceReports } from "src/app/utils/constants/mock-data";
import { ButtonModule } from "primeng/button";
import { IKeyValue } from "src/app/types/common-types";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";

@Component({
  selector: "app-non-adherence",
  standalone: true,
  imports: [TableComponent, ButtonModule, CustomFilterComponent],
  templateUrl: "./non-adherence.component.html",
  styleUrl: "./non-adherence.component.scss",
})
export class NonAdherenceComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("lastReadingFilter", { static: true }) lastReadingFilter!: TemplateRef<any>;
  columns: ColumnConfig[] = [];
  nonAdherenceReportsData = nonAdherenceReports;

  practicesOptions: IKeyValue[] = [
    { label: "Training Organization 1", value: "Training Organization 1" },
    { label: "Training Organization 2", value: "Training Organization 2" },
  ];
  lastReadingOptions: IKeyValue[] = [
    { label: "No Reading For 3 Days", value: "3" },
    { label: "No Reading For 7 Days", value: "7" },
    { label: "No Reading For 14 Days", value: "14" },
    { label: "No Reading For 30 Days", value: "30" },
    { label: "No Reading For 60 Days", value: "60" },
  ];

  durations: any[] = [];

  selectedDuration: number = 3;

  ngOnInit() {
    this.columns = [
      {
        name: "Patient ID",
        field: "id",
        filterType: "none",
      },
      {
        name: "Practice",
        field: "practiceName",
        filterType: "custom",
        filterTemplate: this.practiceNameFilter,
        sort: true,
      },
      {
        name: "First Name",
        field: "firstName",
        filterType: "none",
      },
      {
        name: "Last Name",
        field: "lastName",
        filterType: "none",
      },
      {
        name: "Start Of Care",
        field: "startOfCare",
        filterType: "none",
      },
      {
        name: "Last Reading",
        field: "lastReading",
        filterType: "custom",
        filterTemplate: this.lastReadingFilter,
      },
    ];

    // this.filterByDuration();
  }

  // filterByDuration() {
  //   const today = new Date();

  //   const cutoffDate = new Date(today);
  //   cutoffDate.setDate(today.getDate() - this.selectedDuration);

  //   this.filteredReports = this.reports.filter((report) => {
  //     const lastReadingDate = new Date(report.lastReading);

  //     return lastReadingDate <= cutoffDate;
  //   });
  // }
}
