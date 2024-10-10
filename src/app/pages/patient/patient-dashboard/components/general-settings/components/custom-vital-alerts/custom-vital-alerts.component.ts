import { Component, ViewChild } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { customVitalAlertsMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-custom-vital-alerts",
  standalone: true,
  imports: [TableComponent],
  templateUrl: "./custom-vital-alerts.component.html",
  styleUrl: "./custom-vital-alerts.component.scss",
})
export class CustomVitalAlertsComponent {
  customVitalAlerts: any[] = customVitalAlertsMockData;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  customVitalAlertsColumns: ColumnConfig[] = [];

  ngOnInit() {
    this.customVitalAlertsColumns = [
      {
        name: "Title",
        field: "title",
        filterType: "",
      },
      {
        name: "Vital Type",
        field: "vitalType",
        filterType: "",
      },
      {
        name: "Condition",
        field: "condition",
        filterType: "",
      },
    ];
  }
}
