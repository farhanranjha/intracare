import { Component, TemplateRef, ViewChild } from "@angular/core";
import { BillingReportComponent } from "../billing-reports-filter/billing-reports-filter.component";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { medicaidRomMockBillingData } from "src/app/utils/constants/mock-data";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "medicaid-billing-report",
  standalone: true,
  imports: [TableComponent, DropdownModule, FormsModule, ButtonModule, CustomFilterComponent, BillingReportComponent],
  templateUrl: "./medicaid-billing-report.component.html",
  styleUrl: "./medicaid-billing-report.component.scss",
})
export class MedicaidBillingReportComponent {
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  medicaidBillingReports = medicaidRomMockBillingData;
  filteredReports = [...this.medicaidBillingReports];

  practicesOptions: IKeyValue[] = [{ label: "Training Organization 1", value: "Training Organization 1" }];

  cptCodes = [
    { name: "S9110 Modifiers", value: "S9110 Modifiers" },
    { name: "99453", value: "99453" },
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

    const filteredByCpt = this.medicaidBillingReports.filter((report) => {
      return selectedCptCode ? report.modifiers === selectedCptCode.value : true;
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
