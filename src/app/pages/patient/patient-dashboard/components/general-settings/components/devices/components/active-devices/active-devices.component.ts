import { Component, OnInit, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { activeDeviceMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "active-devices",
  standalone: true,
  imports: [TableComponent, CustomFilterComponent, ButtonModule],
  templateUrl: "./active-devices.component.html",
  styleUrl: "./active-devices.component.scss",
})
export class ActiveDevicesComponent implements OnInit {
  activeDevices: any[] = activeDeviceMockData;
  activeDeviceColumns: ColumnConfig[] = [];
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;

  ngOnInit(): void {
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
  }
}
