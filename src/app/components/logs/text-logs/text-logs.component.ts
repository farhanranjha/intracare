import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { TableComponent } from "../../table/table.component";
import { DashboardRow } from "src/app/services/dashboard/dashboard.service";
import { ColumnConfig } from "src/app/types/table/generic-table-types";

@Component({
  selector: "app-text-logs",
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule, TableComponent],
  templateUrl: "./text-logs.component.html",
})
export class TextLogsComponent implements OnInit {
  @Input() textLogs: any[] = [];
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];
  rowData: DashboardRow[] = [];
  totalRecords: number = 0;
  page: number = 1;
  pageSize: number = 10;
  sortField: string = "id";
  sortOrder: "asc" | "desc" = "asc";
  searchTerm: string = "";

  ngOnInit() {
    this.columns = [
      {
        field: "dateTime",
        name: "Date & Time",
        filterType: "",
      },
      {
        field: "phoneNumber",
        name: "Phone Number",
        filterType: "",
      },
      {
        field: "message",
        name: "Message",
        filterType: "",
      },
      {
        field: "readingType",
        name: "Reading Type",
        filterType: "",
      },
      {
        field: "messageStatus",
        name: "Message Status",
        filterType: "",
      },
    ];
  }
}
