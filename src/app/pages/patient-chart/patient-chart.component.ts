import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { TableModule, Table } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { PatientEnrollmentEditModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-edit-modal/patient-enrollment-edit-modal.component";
import { PatientEnrollmentUpdateModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-update-modal/patient-enrollment-update-modal.component";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { TableComponent } from "../../components/table/table.component";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
  selector: "app-patient-chart",
  standalone: true,
  imports: [ButtonModule, CommonModule, ProgressBarModule, TabViewModule, TableModule, TableComponent],
  templateUrl: "./patient-chart.component.html",
  styleUrl: "./patient-chart.component.scss",
})
export class PatientChartComponent {
  activeIndex: number = 0;
  activeTab: string = "RPM";
  activeBtn: string = "none";

  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: any;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: any;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: any;
  @ViewChild("customFilter", { static: true }) customFilter: any;
  @ViewChild(PatientEnrollmentEditModalComponent) editModalComponent!: PatientEnrollmentEditModalComponent;
  @ViewChild(PatientEnrollmentUpdateModalComponent) updateModalComponent!: PatientEnrollmentUpdateModalComponent;

  constructor(public layoutService: LayoutService) {}

  columns: any[] = [];
  patients: any[] = pendingEnrollmentsRows;

  value: string | undefined;
  isEditing: boolean = false;
  newValue: string = "";

  editNotes() {
    this.isEditing = true;
    this.newValue = this.value;
    console.log("Entering edit mode:", this.isEditing);
  }

  updateNotes() {
    console.log("new value before update:", this.newValue);
    this.value = this.newValue;
    this.isEditing = false;
    console.log("Updated notes:", this.value);
  }

  changeTheme() {
    this.layoutService.changeTheme();
  }

  ngOnInit() {
    this.value = "Verbally agreed to text reminders and alerts related to the diagnosis";
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
        filterType: "custom",
        isCustom: true,
        template: this.programTypeTemplate,
        filterTemplate: this.customFilter,
        options: ["RPM", "CCM"],
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

  openEditModal() {
    if (this.editModalComponent) {
      this.editModalComponent.openModal();
    }
  }
  openUpdateModal() {
    if (this.updateModalComponent) {
      this.updateModalComponent.openModal();
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setActiveBtn(tab: string) {
    console.log(tab);

    this.activeBtn = tab;
  }
}
