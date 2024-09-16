import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-attach-device",
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./attach-device.component.html",
  styleUrl: "./attach-device.component.scss",
})
export class AttachDeviceComponent {
  @Input() patientInfoForm!: FormGroup;
  @Input() name?: string;
  value: string;
}
