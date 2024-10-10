import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { PatientDashboardTableHeightService } from "src/app/services/patient-dashboard-table-height/patient-dashboard-table-height.service";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { callLogsData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "call-logs",
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: "./call-logs.component.html",
})
export class CallLogsComponent implements OnInit {
  callLogs: any[] = callLogsData;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];

  scrollHeight: string = '100%';

  constructor(private heightService: PatientDashboardTableHeightService) {}

  ngOnInit() {
    this.columns = [
      {
        name: "Date & Time",
        field: "dateTime",
        filterType: "",
      },
      {
        name: "Call From",
        field: "callFrom",
        filterType: "",
      },
      {
        name: "Call To",
        field: "callTo",
        filterType: "",
      },
      {
        name: "Phone Number",
        field: "phoneNumber",
        filterType: "",
      },
      {
        name: "Start Time",
        field: "startTime",
        filterType: "",
      },
      {
        name: "End Time",
        field: "endTime",
        filterType: "",
      },
      {
        name: "Duration (mm:ss)",
        field: "duration",
        filterType: "",
      },
      {
        name: "Status",
        field: "status",
        filterType: "",
      },
    ];

    this.heightService.scrollHeight$.subscribe((height: string) => {
      this.scrollHeight = height;
    });
  }
}
