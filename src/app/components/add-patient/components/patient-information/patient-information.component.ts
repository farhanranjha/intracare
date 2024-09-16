import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";

@Component({
  selector: "app-patient-information",
  standalone: true,
  imports: [InputTextModule, DropdownModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./patient-information.component.html",
  styleUrl: "./patient-information.component.scss",
})
export class PatientInformationComponent {
  @Input() patientInfoForm!: FormGroup;
  @Input() name?: string;
  value: string;
}
