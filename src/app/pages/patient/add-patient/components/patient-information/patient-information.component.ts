import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import { RadioButtonModule } from "primeng/radiobutton";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-patient-information",
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    InputGroupAddonModule,
    InputGroupModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CheckboxModule,
  ],
  templateUrl: "./patient-information.component.html",
  styleUrl: "./patient-information.component.scss",
})
export class PatientInformationComponent {
  @Input() patientInfoForm!: FormGroup;
  @Input() name?: string;
  value: string;
}
