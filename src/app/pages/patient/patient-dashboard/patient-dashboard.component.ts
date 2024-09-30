import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { ProgressBarModule } from "primeng/progressbar";
import { TabViewModule } from "primeng/tabview";
import { ColumnConfig, TableComponent } from "src/app/components/table/table.component";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  imports: [ButtonModule, CommonModule, DividerModule, ProgressBarModule, TabViewModule, TableComponent],
  templateUrl: "./patient-dashboard.component.html",
  styleUrl: "./patient-dashboard.component.scss",
})
export class PatientDashboardComponent implements OnInit {
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: any;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: any;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: any;
  activeTab: string = "RPM";
  columns: ColumnConfig[] = [];
  patients: any[] = pendingEnrollmentsRows;
  ngOnInit(): void {
    this.columns = [
      { name: "Date", field: "date", filterType: "date" },
      {
        name: "Patient Name",
        field: "name",
        filterType: "text",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      { name: "Practice", field: "practice", filterType: "text" },
      { name: "Device Type", field: "deviceType", filterType: "text" },
      {
        name: "Program Type",
        field: "programType",
        filterType: "none",
        isCustom: true,
        template: this.programTypeTemplate,
      },
      { name: "Status", field: "status", filterType: "text", isCustom: true, template: this.statusTemplate },
      { name: "Progress", field: "progress", filterType: "numeric", isCustom: true, template: this.progressTemplate },
      { name: "Consent", field: "consent", filterType: "text", isCustom: true, template: this.consentTemplate },
      {
        name: "Edit / Update",
        field: "",
        isCustom: true,
        template: this.editUpdateTemplate,
        filterType: "none",
      },
    ];
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
