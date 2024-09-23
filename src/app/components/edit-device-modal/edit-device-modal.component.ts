import { Component, Input } from "@angular/core";
import { DeviceTileComponent } from "../device-tile/device-tile.component";
import { DialogModule } from "primeng/dialog";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { mockDevicesData } from "src/app/utils/constants/mock-data";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "edit-device-modal",
  standalone: true,
  imports: [DeviceTileComponent, DialogModule, CommonModule, InputTextModule, DropdownModule, ButtonModule],
  templateUrl: "./edit-device-modal.component.html",
  styleUrl: "./edit-device-modal.component.scss",
})
export class EditDeviceModalComponent {
  @Input() visibleAddDevice: boolean = false;
  @Input() devicesData: any[] = [];
  isEditMode = false;

  enableEditMode() {
    this.isEditMode = true;
  }
  disableEditMode() {
    this.isEditMode = false;
  }
}
