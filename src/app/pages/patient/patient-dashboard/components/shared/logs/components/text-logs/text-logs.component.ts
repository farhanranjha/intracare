import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { textLogsData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "text-logs",
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: "./text-logs.component.html",
})
export class TextLogsComponent implements OnInit {
  textLogs: any[] = textLogsData;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];

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
