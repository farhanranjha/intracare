import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { screeningSchema, screeningTableMockData } from "src/app/utils/constants/mock-data";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";

@Component({
  selector: "app-screenings",
  standalone: true,
  imports: [CommonModule, ButtonModule, SidebarModule, DynamicFormComponent, TableComponent],
  templateUrl: "./screenings.component.html",
  styleUrl: "./screenings.component.scss",
})
export class ScreeningsComponent implements OnInit {
  sidebarVisible: boolean = false;
  screeningSchema = screeningSchema;
  screeningTableData = screeningTableMockData;
  columns: ColumnConfig[] = [];
  ngOnInit(): void {
    this.columns = [
      {
        name: "Type",
        field: "type",
        filterType: "date",
      },
      {
        name: "Taken By",
        field: "takenBy",
        filterType: "text",
      },
      {
        name: "Date",
        field: "date",
        sort: true,
      },
      {
        name: "Time",
        field: "time",
      },
    ];
  }
  handleFormSubmit(formValue: any) {
    console.log("Form submitted with value:", formValue);
  }
  onAddScreening() {
    this.sidebarVisible = true;
  }
}
