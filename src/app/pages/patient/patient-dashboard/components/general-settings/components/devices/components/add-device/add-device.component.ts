import { Component, Input } from "@angular/core";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "add-device",
  standalone: true,
  imports: [DialogModule],
  templateUrl: "./add-device.component.html",
  styleUrl: "./add-device.component.scss",
})
export class AddDeviceComponent {
  @Input() displayModal: boolean = false;
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

  submit() {
    this.displayModal = false;
  }

  cancel() {
    this.displayModal = false;
  }
}
