import { Component, TemplateRef, ViewChild } from "@angular/core";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { medicaidRomMockBillingData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";
import { formatDate } from "@angular/common";

@Component({
  selector: "medicaid-billing-report",
  standalone: true,
  imports: [TableComponent, ButtonModule, CustomFilterComponent],
  templateUrl: "./medicaid-billing-report.component.html",
  styleUrl: "./medicaid-billing-report.component.scss",
})
export class MedicaidBillingReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("modifierCodesFilter", { static: true }) modifierCodesFilter!: TemplateRef<any>;
  columns: ColumnConfig[] = [];
  medicaidBillingReports = medicaidRomMockBillingData;

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];

  modifierCodesOptions: IKeyValue[] = [
    { label: "S9110 Modifiers", value: "S9110 Modifiers" },
    { label: "99453", value: "99453" },
  ];

  ngOnInit() {
    this.columns = [
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
        name: "Date of Birth",
        field: "dob",
        filterType: "none",
      },
      {
        name: "Modifiers",
        field: "modifiers",
        filterType: "custom",
        filterTemplate: this.modifierCodesFilter,
        sort: true,
      },
      {
        name: "ICD 10 Code",
        field: "icdCode",
        filterType: "none",
      },
      {
        name: "Service Date",
        field: "serviceDate",
        filterType: "date",
        valueFormatter: this.formatToUSDate,
        sort: true,
      },
    ];
  }
  formatToUSDate(date: string) {
    return formatDate(date, "MM/dd/YYYY", "en-US");
  }
}
