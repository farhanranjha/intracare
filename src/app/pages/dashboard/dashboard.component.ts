import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
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
  rowData: DashboardRow[] = [];
  totalRecords: number = 0;
  page: number = 1;
  pageSize: number = 10;
  sortField: string = "id";
  sortOrder: "asc" | "desc" = "asc";
  searchTerm: string = "";

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.fetchData();
    this.columns = [
      {
        name: "Name",
        field: "name",
        filterType: "none",
        sort: true,
      },
      { name: "Country", field: "country.name", filterType: "text" },
      {
        name: "Representative",
        field: "representative.name",
        filterType: "custom",
        filterTemplate: this.customFilterRepresentative,
        options: [
          { value: "Representative 1", label: "Representative 1", checked: false },
          { value: "Representative 2", label: "Representative 2", checked: false },
          { value: "Representative 3", label: "Representative 3", checked: false },
          { value: "Representative 4", label: "Representative 4", checked: false },
        ],
      },
      { name: "Date", field: "date", filterType: "date" },
      { name: "Balance", field: "balance", filterType: "numeric" },
      { name: "Actions", field: "", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
  }

  onLazyLoad(event: LazyLoadEvent) {
    console.log("===LAZYLOADEVENT===> ", event);
  }
  fetchData() {
    this.dashboardService
      .getDashboardData(this.page, this.pageSize, this.sortField, this.sortOrder, this.searchTerm)
      .subscribe(({ data, total }) => {
        this.rowData = data;
        this.totalRecords = total;
      });
  }
}
