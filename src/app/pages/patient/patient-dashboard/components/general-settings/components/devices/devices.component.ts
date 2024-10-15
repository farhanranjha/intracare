import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { IKeyValue } from "src/app/types/common-types";
import { ActiveDevicesComponent } from "./components/active-devices/active-devices.component";
import { UsedDevicesComponent } from "./components/used-devices/used-devices.component";
import { AddDeviceComponent } from "./components/add-device/add-device.component";

@Component({
  selector: "app-devices",
  standalone: true,
  imports: [SidebarRouterComponent, CommonModule, ActiveDevicesComponent, UsedDevicesComponent, AddDeviceComponent],
  templateUrl: "./devices.component.html",
  styleUrl: "./devices.component.scss",
})
export class DevicesComponent {
  routes: IKeyValue[] = [
    { label: "Active Devices", value: "active" },
    { label: "Used Devices", value: "used" },
    { label: "Add Device", value: "add" },
  ];
  activeTab: IKeyValue = this.routes[0];

  onTabChange(tab: IKeyValue) {
    this.activeTab = tab;
  }
}
