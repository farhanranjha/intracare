import { Component, TemplateRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { BillingReportComponent } from "../../billing-reports-filter/billing-reports-filter.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { rpmMockBillingData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "rpm-billing-report",
  standalone: true,
  imports: [TableComponent, DropdownModule, FormsModule, ButtonModule, CustomFilterComponent, BillingReportComponent],
  templateUrl: "./rpm-billing-report.component.html",
  styleUrls: ["./rpm-billing-report.component.scss"],
})
export class RpmBillingReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  rpmBillingReports = rpmMockBillingData;
  filteredReports = [...this.rpmBillingReports];

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];

  cptCodes = [
    { name: "99453 & 99454", value: "99453 & 99454" },
    { name: "99457 & 99458", value: "99457 & 99458" },
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
        filterType: "none",
      },
      {
        name: "ICD 10 Code",
        field: "icdCode",
        filterType: "none",
      },
      {
        name: "Service Date",
        field: "serviceDate",
        filterType: "none",
      },
    ];
  }

  onFilterSelection(event: any) {
    const { selectedDateRange, selectedCptCode } = event;

    const filteredByCpt = this.rpmBillingReports.filter((report) => {
      return selectedCptCode ? report.billableCodes === selectedCptCode.value : true;
    });

    if (selectedDateRange && selectedDateRange.length === 2) {
      const [startDate, endDate] = selectedDateRange;

      this.filteredReports = filteredByCpt.filter((report) => {
        const serviceDate = new Date(report.serviceDate);
        return serviceDate >= startDate && serviceDate <= new Date(endDate.setHours(23, 59, 59, 999));
      });
    } else {
      this.filteredReports = filteredByCpt;
    }
  }
}
