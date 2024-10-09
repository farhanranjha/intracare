import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Table } from "primeng/table";
import { mockDevicesData, pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { DialogModule } from "primeng/dialog";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { TableComponent } from "src/app/components/table/table.component";
import { RouterModule } from "@angular/router";
import { IDeviceTypes, IPendingEnrollments } from "src/app/types/mock-data/mock-data-types";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { DeviceTileComponent } from "./components/edit-devices-modal/components/device-tile/device-tile.component";
import { EditDevicesModalComponent } from "./components/edit-devices-modal/edit-devices-modal.component";

@Component({
  selector: "app-pending-enrollments",
  standalone: true,
  imports: [
    ButtonModule,
    DeviceTileComponent,
    DialogModule,
    CommonModule,
    InputTextModule,
    DropdownModule,
    EditDevicesModalComponent,
    TableComponent,
    RouterModule,
  ],
  templateUrl: "./pending-enrollments.component.html",
  styleUrl: "./pending-enrollments.component.scss",
})
export class PendingEnrollmentsComponent {
  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: TemplateRef<any>;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: TemplateRef<any>;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: TemplateRef<any>;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: TemplateRef<any>;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: TemplateRef<any>;
  @ViewChild("customFilter", { static: true }) customFilter: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  patients: IPendingEnrollments[] = pendingEnrollmentsRows;
  visibleAddDevice: boolean = false;
  isEditMode = false;
  devicesData: IDeviceTypes[] = mockDevicesData;

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
      {
        name: "Device Type",
        field: "deviceType",
        filterType: "text",
      },
      {
        name: "Program Type",
        field: "programType",
        filterType: "custom",
        isCustom: true,
        template: this.programTypeTemplate,
        filterTemplate: this.customFilter,
        options: [
          { label: "RPM", value: "RPM", checked: false },
          { label: "CCM", value: "CCM", checked: false },
        ],
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
