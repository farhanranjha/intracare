import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { readingsComplianceData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";
import { CommonModule, formatDate } from "@angular/common";
import { IReadingCompliance } from "src/app/types/mock-data/mock-data-types";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: "app-care-management-reading-report",
  standalone: true,
  imports: [TableComponent, ButtonModule, CustomFilterComponent, CommonModule, TooltipModule],
  templateUrl: "./care-management-reading-report.component.html",
  styleUrl: "./care-management-reading-report.component.scss",
})
export class CareManagementReadingReportComponent {
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate!: TemplateRef<any>;
  @ViewChild("previousMonthsBillingTemplate", { static: true }) previousMonthsBillingTemplate!: TemplateRef<any>;
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("currentBillingFilter", { static: true }) currentBillingFilter!: TemplateRef<any>;
  @ViewChild("weeklyTargetFilter", { static: true }) weeklyTargetFilter!: TemplateRef<any>;

  currentDate: string = formatDate(new Date(), "yyyy-MM-dd", "en");

  billableCount: number = 0;
  onTargetCount: number = 1;
  offTargetCount: number = 3;
  nonBillableCount: number = 3;

  columns: ColumnConfig[] = [];
  readingsComplianceReports: IReadingCompliance[] = readingsComplianceData;

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  currentBillingOptions: IKeyValue[] = [
    { label: "Billable", value: "Billable" },
    { label: "Non-Billable", value: "Non-Billable" },
    { label: "Off Target", value: "Off Target" },
    { label: "On Target", value: "On Target" },
  ];
  weeklyTargetOptions: IKeyValue[] = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  ngOnInit() {
    console.log(this.readingsComplianceReports);
    this.columns = [
      {
        name: "Name",
        field: "name",
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
        name: "Start Date",
        field: "startDate",
        sort: true,
      },
      {
        name: "Weekly Target",
        field: "weeklyTarget",
        sort: true,
        filterType: "custom",
        filterTemplate: this.weeklyTargetFilter,
      },
      {
        name: "DOR",
        field: "dor",
        sort: true,
      },
      {
        name: "DOR Needed",
        field: "dorNeeded",
        sort: true,
      },
      {
        name: "Potential Reading Days",
        field: "potentialReadingDays",
        sort: true,
      },
      {
        name: "Time Spent",
        field: "timeSpent",
        sort: true,
      },
      {
        name: "Previous Months Billing Status",
        field: "previousMonthsBillingStatus",
        isCustom: true,
        template: this.previousMonthsBillingTemplate,
      },
      {
        name: "Current Billing Status",
        field: "currentBillingStatus",
        sort: true,
        filterType: "custom",
        filterTemplate: this.currentBillingFilter,
      },
    ];
  }
}
