import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { rpmMockBillingData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";
import { formatDate } from "@angular/common";

@Component({
  selector: "rpm-billing-report",
  standalone: true,
  imports: [TableComponent, ButtonModule, CustomFilterComponent],
  templateUrl: "./rpm-billing-report.component.html",
  styleUrl: "./rpm-billing-report.component.scss",
})
export class RpmBillingReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;
  @ViewChild("billableCodesFilter", { static: true }) billableCodesFilter!: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  rpmBillingReports = rpmMockBillingData;

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];
  billableCodesOptions: IKeyValue[] = [
    { label: "99453 & 99454", value: "99453 & 99454" },
    { label: "99457 & 99458", value: "99457 & 99458" },
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
