import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Table } from "primeng/table";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { TableComponent } from "../../components/table/table.component";
import { DialogModule } from "primeng/dialog";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";

@Component({
  selector: "app-pending-enrollments",
  standalone: true,
  imports: [ButtonModule, TableComponent, DialogModule, CommonModule, InputTextModule, DropdownModule],
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

  columns: any[] = [];
  patients: any[] = pendingEnrollmentsRows;
  visibleAddDevice: boolean = true;
  isEditMode = false;

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

  clear(table: any) {
    table.clear();
  }

  showDialog() {
    this.visibleAddDevice = true;
  }

  enableEditMode() {
    this.isEditMode = true;
  }
  disableEditMode() {
    this.isEditMode = false;
  }
}
