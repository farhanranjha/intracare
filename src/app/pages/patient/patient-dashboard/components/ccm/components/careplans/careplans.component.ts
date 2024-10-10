import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { TableComponent } from "src/app/components/table/table.component";
import { IKeyValue } from "src/app/types/common-types";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { carePlanMockData, screeningSchema } from "src/app/utils/constants/mock-data";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";

@Component({
  selector: "app-careplans",
  standalone: true,
  imports: [SidebarRouterComponent, CommonModule, TableComponent, ButtonModule, SidebarModule, DynamicFormComponent],
  templateUrl: "./careplans.component.html",
  styleUrl: "./careplans.component.scss",
})
export class CareplansComponent {
  constructor(private route: ActivatedRoute) {}
  routes: IKeyValue[] = [
    { label: "In-Progress", value: "inprogress" },
    { label: "Completed", value: "completed" },
    { label: "Unable to Complete", value: "unabletocomplete" },
  ];
  activeTab: IKeyValue = this.routes[0];
  carePlanTableData = carePlanMockData;
  columns: ColumnConfig[] = [];
  sidebarVisible: boolean = false;
  screeningSchema = screeningSchema;

  ngOnInit(): void {
    this.columns = [
      {
        name: "Start Date",
        field: "startDate",
        filterType: "date",
      },
      {
        name: "Diagnosis",
        field: "diagnosis",
        filterType: "text",
      },
      {
        name: "Goal",
        field: "goal",
      },
      {
        name: "Review Date",
        field: "reviewDate",
        filterType: "date",
      },
      {
        name: "Goal Completed",
        field: "goalCompleted",
      },
    ];
  }
  onTabChange(tab: IKeyValue) {
    this.activeTab = tab;
  }
  handleFormSubmit(formValue: any) {
    console.log("Form submitted with value:", formValue);
  }
  onAddCarePlan() {
    this.sidebarVisible = true;
  }
}
