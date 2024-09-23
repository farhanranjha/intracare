import { Component, OnInit, ViewChild } from "@angular/core";
import { ColumnConfig } from "../../components/table/table.component";
import { dashboardRows } from "src/app/utils/constants/mock-data";

@Component({
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  @ViewChild("customFilter", { static: true }) customFilter: any;
  columns: ColumnConfig[] = [];
  rowData: any[] = dashboardRows;

  ngOnInit() {
    this.columns = [
      { name: "Name", field: "name", filterType: "none" },
      { name: "Country", field: "country.name", filterType: "text" },
      {
        name: "Representative",
        field: "representative.name",
        filterType: "custom",
        filterTemplate: this.customFilter,
        options: ["Ioni Bowcher", "Farhan"],
      },
      { name: "Date", field: "date", filterType: "date" },
      { name: "Balance", field: "balance", filterType: "numeric" },
      { name: "Actions", field: "", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
  }
  onActionClick(row: any) {
    console.log("Button clicked for row:", row);
  }
  onCheckboxChange(selectedOptions: string[]) {
    console.log("Selected options: ", selectedOptions);
  }
}
