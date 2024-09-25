import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-attach-device",
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, ReactiveFormsModule, DropdownModule, ButtonModule],
  templateUrl: "./attach-device.component.html",
  styleUrl: "./attach-device.component.scss",
})
export class AttachDeviceComponent implements OnInit {
  @Input() patientInfoForm!: FormGroup;
  @Input() name?: string;
  value: string;
  constructor(private fb: FormBuilder) {}

  mockOptions = [
    { label: "Option A", value: "option1" },
    { label: "Option B", value: "option2" },
  ];

  ngOnInit() {
    const devicesArray = this.patientInfoForm.get("devices") as FormArray;
    if (!devicesArray) {
      this.patientInfoForm.addControl("devices", this.fb.array([this.createDeviceRow()]));
    }
  }
  createDeviceRow(): FormGroup {
    return this.fb.group({
      deviceName: [""],
      serialId: [""],
      isDisabled: [false],
    });
  }

  get devices(): FormArray {
    return this.patientInfoForm.get("devices") as FormArray;
  }

  addNewRow() {
    this.devices
      .at(this.devices.length - 1)
      .get("isDisabled")
      ?.setValue(true);
    this.devices.push(this.createDeviceRow());
  }

  deleteRow(index: number) {
    this.devices.removeAt(index);
  }

  isPlusButtonDisabled(): boolean {
    const lastRow = this.devices.at(this.devices.length - 1);
    return !lastRow.get("deviceName")?.value || !lastRow.get("serialId")?.value;
  }
}
