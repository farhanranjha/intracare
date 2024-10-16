import { Component, OnInit } from "@angular/core";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { previouslyUsedDevicesMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "used-devices",
  standalone: true,
  imports: [TableComponent],
  templateUrl: "./used-devices.component.html",
  styleUrl: "./used-devices.component.scss",
})
export class UsedDevicesComponent implements OnInit {
  previouslyUsedDevices: any[] = previouslyUsedDevicesMockData;
  previouslyUsedDeviceColumns: ColumnConfig[] = [];

  ngOnInit() {
    this.previouslyUsedDeviceColumns = [
      {
        name: "Device Type",
        field: "deviceType",
      },
      {
        name: "Serial Number",
        field: "serialNumber",
      },
      {
        name: "Date Added",
        field: "dateAdded",
      },
      {
        name: "Last Transmission",
        field: "lastTransmission",
      },
      {
        name: "Removed Date",
        field: "removedDate",
      },
    ];
  }
}
