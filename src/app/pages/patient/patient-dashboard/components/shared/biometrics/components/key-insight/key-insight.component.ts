import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { keyInsightsMockData } from "src/app/utils/constants/mock-data";
@Component({
  selector: "key-insight",
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: "./key-insight.component.html",
  styleUrl: "./key-insight.component.scss",
})
export class KeyInsightComponent {
  keyInsightsMockData: any[] = keyInsightsMockData;
  columns: ColumnConfig[] = [];

  ngOnInit() {
    this.columns = [
      {
        name: "Biometric Type",
        field: "biometricType",
        filterType: "text",
      },
      {
        name: "Latest Reading",
        field: "latestReading",
        sort: true,
      },
      {
        name: "Key Insights",
        field: "keyInsights",
      },
      {
        name: "Key Insights Value",
        field: "keyInsightsValue",
      },
    ];
  }
}
