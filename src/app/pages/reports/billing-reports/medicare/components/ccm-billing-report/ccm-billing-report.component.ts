import { Component, TemplateRef, ViewChild } from "@angular/core";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { ccmMockBillingData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";
import { formatDate } from "@angular/common";

@Component({
  selector: "ccm-billing-report",
  standalone: true,
  imports: [TableComponent, ButtonModule, CustomFilterComponent],
  templateUrl: "./ccm-billing-report.component.html",
  styleUrl: "./ccm-billing-report.component.scss",
})
export class CcmBillingReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("billableCodesFilter", { static: true }) billableCodesFilter!: TemplateRef<any>;
  columns: ColumnConfig[] = [];
  ccmBillingReports = ccmMockBillingData;

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];

  billableCodesOptions: IKeyValue[] = [
    { label: "99490 & 99439,99487 & 99489", value: "99490 & 99439,99487 & 99489" },
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
        name: "Billable Codes",
        field: "billableCodes",
        filterType: "custom",
        filterTemplate: this.billableCodesFilter,
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
