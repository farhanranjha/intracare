import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-diagnosis",
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, ReactiveFormsModule, DropdownModule],
  templateUrl: "./diagnosis.component.html",
  styleUrl: "./diagnosis.component.scss",
})
export class DiagnosisComponent {
  @Input() patientInfoForm!: FormGroup;
  @Input() name?: string;
  value: string;
}
