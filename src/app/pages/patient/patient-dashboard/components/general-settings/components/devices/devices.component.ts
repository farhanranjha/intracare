import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { activeDeviceMockData, previouslyUsedDevicesMockData } from "src/app/utils/constants/mock-data";
import { PatientHoldModalComponent } from "../../../patient-hold-modal/patient-hold-modal.component";

@Component({
  selector: "app-devices",
  standalone: true,
  imports: [
    TableComponent,
    ButtonModule,
    CommonModule,
    FormsModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    CheckboxModule,
    PatientHoldModalComponent,
  ],
  templateUrl: "./devices.component.html",
  styleUrl: "./devices.component.scss",
})
export class DevicesComponent {
  displayModal: boolean = false;

  showHoldModal: boolean = false;

  selectedDeviceType: any = null;
  deviceSerial: string = "";
  shipDevice: boolean = false;
  deviceTypes = [
    { name: "Blood Pressure Monitor" },
    { name: "Heart Rate Monitor" },
    { name: "Glucose Meter" },
    { name: "Pulse Oximeter" },
    { name: "Smartwatch" },
  ];

  activeDevices: any[] = activeDeviceMockData;
  previouslyUsedDevices: any[] = previouslyUsedDevicesMockData;

  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  activeDeviceColumns: ColumnConfig[] = [];
  previouslyUsedDeviceColumns: ColumnConfig[] = [];

  ngOnInit() {
    this.activeDeviceColumns = [
      {
        name: "Device Type",
        field: "deviceType",
        filterType: "",
      },
      {
        name: "Serial Number",
        field: "serialNumber",
        filterType: "",
      },
      {
        name: "Date Added",
        field: "dateAdded",
        filterType: "",
      },
      {
        name: "Battery",
        field: "battery",
        filterType: "",
      },
      {
        name: "Signal",
        field: "signal",
        filterType: "",
      },
      {
        name: "Last Transmission",
        field: "lastTransmission",
        filterType: "",
      },
      {
        name: "Last Seen",
        field: "lastSeen",
        filterType: "",
      },
      { name: "Remove Device", field: "actions", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
    this.previouslyUsedDeviceColumns = [
      {
        name: "Device Type",
        field: "deviceType",
        filterType: "",
      },
      {
        name: "Serial Number",
        field: "serialNumber",
        filterType: "",
      },
      {
        name: "Date Added",
        field: "dateAdded",
        filterType: "",
      },
      {
        name: "Last Transmission",
        field: "lastTransmission",
        filterType: "",
      },
      {
        name: "Removed Date",
        field: "removedDate",
        filterType: "",
      },
    ];
  }

  addDevice() {
    this.displayModal = true;
  }

  submit() {
    this.displayModal = false;
  }

  cancel() {
    this.displayModal = false;
  }

  onClose() {
    this.showHoldModal = false;
  }

  openHoldModal() {
    this.showHoldModal = true;
  }

  closeHoldModal() {
    this.showHoldModal = false;
  }

  updateStatus() {
    this.showHoldModal = false;
  }

  removeDevice(id: string) {
    alert(id);
  }

  shippedDevice(ship: boolean) {
    if (ship) {
      this.shipDevice = false;
    } else {
      this.shipDevice = true;
    }
  }
}
