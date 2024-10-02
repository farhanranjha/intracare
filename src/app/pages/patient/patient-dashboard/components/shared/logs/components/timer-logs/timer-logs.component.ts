import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TableComponent } from "src/app/components/table/table.component";
import { DashboardRow } from "src/app/services/dashboard/dashboard.service";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { timerLogsData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "timer-logs",
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, TableComponent, ButtonModule],
  templateUrl: "./timer-logs.component.html",
})
export class TimerLogsComponent implements OnInit {
  timerLogs: any[] = timerLogsData;
  displayModal: boolean = false;
  selectedNote: any = null;
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
        field: "takenBy",
        name: "Taken By",
        filterType: "",
      },
      {
        field: "startTime",
        name: "Start Time",
        filterType: "",
      },
      {
        field: "endTime",
        name: "End Time",
        filterType: "",
      },
      {
        field: "duration",
        name: "Duration (mm:ss)",
        filterType: "",
      },
      {
        field: "billable",
        name: "Billable",
        filterType: "",
      },
      {
        field: "billingCategory",
        name: "Billing Category",
        filterType: "",
      },
      {
        field: "logType",
        name: "Log Type",
        filterType: "",
      },
      { name: "Actions", field: "actions", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
  }
  showNote(data: any) {
    this.selectedNote = data;
    this.displayModal = true;
  }
}
