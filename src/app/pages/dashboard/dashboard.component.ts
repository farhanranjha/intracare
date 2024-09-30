import { Component, OnInit, ViewChild } from "@angular/core";
import { ColumnConfig } from "../../components/table/table.component";
import { dashboardRows } from "src/app/utils/constants/mock-data";
import { DashboardRow, DashboardService } from "src/app/services/dashboard/dashboard.service";
import { LazyLoadEvent } from "primeng/api";

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  @ViewChild("customFilterName", { static: true }) customFilterName: any;
  @ViewChild("customFilterRepresentative", { static: true }) customFilterRepresentative: any;
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
    console.log("===event===> ", event);
  }
  fetchData() {
    this.dashboardService
      .getDashboardData(this.page, this.pageSize, this.sortField, this.sortOrder, this.searchTerm)
      .subscribe(({ data, total }) => {
        this.rowData = data;
        this.totalRecords = total;
      });
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.pageSize = event.pageSize;
    this.fetchData();
  }

  onSortChange(field: string) {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortOrder = "asc";
    }
    this.fetchData();
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
    this.fetchData();
  }
  onActionClick(row: any) {
    console.log("Button clicked for row:", row);
  }
  onCheckboxChange(selectedOptions: string[]) {
    console.log("Selected options: ", selectedOptions);
  }
}
