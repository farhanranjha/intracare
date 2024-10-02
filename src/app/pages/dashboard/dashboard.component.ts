import { Component, inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { dashboardRows } from "src/app/utils/constants/mock-data";
import { DashboardRow, DashboardService } from "src/app/services/dashboard/dashboard.service";
import { LazyLoadEvent } from "primeng/api";
import { ColumnConfig } from "src/app/types/table/generic-table-types";

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

  constructor(private authService: DashboardService) {}

  ngOnInit() {
    this.columns = [
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
        name: "Date",
        field: "date",
        filterType: "date",
        sort: true,
      },
      {
        name: "Patient Name",
        field: "patientName",
        filterType: "text",
        sort: true,
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
        filterType: "text",
        sort: true,
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
      {
        name: "Actions",
        field: "",
        isCustom: true,
        template: this.actionTemplate,
        filterType: "none",
      },
    ];
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.authService.getDashboardData(event).subscribe(({ data, total }) => {
      this.rowData = data;
      this.totalRecords = total;
    });
  }
}
