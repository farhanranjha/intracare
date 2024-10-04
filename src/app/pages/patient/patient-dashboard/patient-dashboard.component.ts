import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { ProgressBarModule } from "primeng/progressbar";
import { TabViewModule } from "primeng/tabview";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { TableComponent } from "src/app/components/table/table.component";
import { IKeyValue } from "src/app/types/common-types";
import { HeaderComponent } from "./components/header/header.component";
import { PatientInfoTabComponent } from "./components/patient-info-tab/patient-info-tab.component";

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DividerModule,
    ProgressBarModule,
    TabViewModule,
    TableComponent,
    RouterModule,
    HeaderComponent,
    PatientInfoTabComponent,
    TabRouterComponent,
  ],
  templateUrl: "./patient-dashboard.component.html",
  styleUrl: "./patient-dashboard.component.scss",
})
export class PatientDashboardComponent {
  routes: IKeyValue[] = [
    { label: "General Settings", value: "general-settings" },
    { label: "RPM", value: "rpm" },
    { label: "CCM", value: "ccm" },
  ];
}
