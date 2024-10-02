import { Component, inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { dashboardRows } from "src/app/utils/constants/mock-data";
import { DashboardRow, DashboardService } from "src/app/services/dashboard/dashboard.service";
import { LazyLoadEvent } from "primeng/api";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { formatDate } from "@angular/common";

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild("customFilterName", { static: true }) customFilterName: TemplateRef<any>;
  @ViewChild("customFilterRepresentative", { static: true }) customFilterRepresentative: TemplateRef<any>;
  columns: ColumnConfig[] = [];
  rowData: any = [];
  totalRecords: number = 0;
  page: number = 1;
  pageSize: number = 10;
  sortField: string = "id";
  sortOrder: "asc" | "desc" = "asc";
  searchTerm: string = "";

  practices: any;

  constructor(private authService: DashboardService) {}

  ngOnInit() {

    // TODO: FIX this later
    this.authService.getClinics().subscribe(({ data, total }) => {
      this.practices = data.map((row) => {
        return { value: row.id, label: row.name, checked: false }
      });
      this.totalRecords = total;
    });


    this.columns = [
      {
        name: "Patient Name",
        field: "patientName",
        filterType: "text",
        sort: true,
        isFrozen: true,
      },
      {
        name: "Date",
        field: "date",
        filterType: "date",
        sort: true,
        isFrozen: true,
      },
      {
        name: "Patient DOB",
        field: "patientDob",
        filterType: "date",
        sort: true,
      },
      {
        name: "Cell Phone",
        field: "cellPhoneNumber",
        filterType: "text",
        sort: false,
      },
      {
        name: "Request ID",
        field: "sysRegistrationRequestId",
        filterType: "numeric",
        sort: true,
      },
      {
        name: "Update By",
        field: "sysUpdateBy",
        filterType: "numeric",
        sort: true,
      },
      {
        name: "Provider ID",
        field: "sysRefProviderId",
        filterType: "numeric",
        sort: true,
      },
      {
        name: "Device Type",
        field: "deviceType.name",
        filterType: "text",
        sort: true,
      },
      {
        name: "Request Status ID",
        field: "lkpRequestStatusId",
        filterType: "numeric",
        sort: true,
      },
      {
        name: "Clinic",
        field: "practiceName.name",
        filterType: "custom",
        sort: true,
        filterTemplate: this.customFilterRepresentative,
        options: [
          { value: "Representative 1", label: "Representative 1", checked: false },
          { value: "Representative 2", label: "Representative 2", checked: false },
          { value: "Representative 3", label: "Representative 3", checked: false },
          { value: "Representative 4", label: "Representative 4", checked: false },
        ],
      },
      {
        name: "Consent",
        field: "consent.name",
        filterType: "text",
        sort: false,
      },
      {
        name: "Program Type",
        field: "programType",
        filterType: "text",
        sort: false,
      },
      {
        name: "Status",
        field: "status",
        filterType: "text",
        sort: false,
      },
    ];
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.authService.getDashboardData(event).subscribe(({ data, total }) => {
      this.rowData = data.map((row) => {
        return Object.keys(row).reduce((acc, key) => {
          if (key === "date") {
            acc[key] = formatDate(row[key], "MM/dd/yyyy", "en-US");
          } else if (key === "patientDob") {
            acc[key] = formatDate(row[key], "MM/dd/yyyy", "en-US");
          } else {
            acc[key] = row[key] === null || row[key] === undefined || row[key] === "" ? "--" : row[key];
          }
          return acc;
        }, {});
      });
      this.totalRecords = total;
    });
  }
}
