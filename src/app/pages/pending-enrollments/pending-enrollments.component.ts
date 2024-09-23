import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Table } from "primeng/table";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { TableComponent } from "../../components/table/table.component";
import { PatientEnrollmentEditModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-edit-modal/patient-enrollment-edit-modal.component";
import { PatientEnrollmentUpdateModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-update-modal/patient-enrollment-update-modal.component";

@Component({
  selector: "app-pending-enrollments",
  standalone: true,
  imports: [ButtonModule, TableComponent, PatientEnrollmentEditModalComponent, PatientEnrollmentUpdateModalComponent],
  templateUrl: "./pending-enrollments.component.html",
  styleUrl: "./pending-enrollments.component.scss",
})
export class PendingEnrollmentsComponent {
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

  columns: any[] = [];
  patients: any[] = pendingEnrollmentsRows;

  ngOnInit() {
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

  clear(table: any) {
    table.clear();
  }
}
