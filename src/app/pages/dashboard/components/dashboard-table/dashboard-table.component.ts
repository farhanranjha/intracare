import { Component, OnInit } from "@angular/core";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { dashboardMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "dashboard-table",
  templateUrl: "./dashboard-table.component.html",
  styleUrl: "./dashboard-table.component.scss",
})
export class DashboardTableComponent implements OnInit {
  dashboardData = dashboardMockData;
  column: ColumnConfig[] = [];

  ngOnInit(): void {
    this.column = [
      {
        name: "Patient Name",
        field: "patientName",
        filterType: "",
      },
      {
        name: "Patient ID",
        field: "patientID",
        filterType: "",
      },
      {
        name: "Practice Name",
        field: "practiceName",
        filterType: "",
      },
      {
        name: "Blood Pressure",
        field: "bloodPressure",
        filterType: "",
      },
      {
        name: "Blood Glucose (mg/dL)",
        field: "bloodGlucose",
        filterType: "",
      },
      {
        name: "Heart Rate (bpm)",
        field: "heartRate",
        filterType: "",
      },
      {
        name: "Weight (kg)",
        field: "weight",
        filterType: "",
      },
      {
        name: "SpO2 (%)",
        field: "spo2",
        filterType: "",
      },
      {
        name: "Temperature (°F)",
        field: "temperature",
        filterType: "",
      },
      {
        name: "Status",
        field: "status",
        filterType: "",
      },
    ];
  }
}
