import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { PatientInformationComponent } from "./components/patient-information/patient-information.component";
import { DiagnosisComponent } from "./components/diagnosis/diagnosis.component";
import { AttachDeviceComponent } from "./components/attach-device/attach-device.component";
import { PracticeInformationComponent } from "./components/practice-information/practice-information.component";
import { InsuranceInfoComponent } from "./components/insurance-info/insurance-info.component";

@Component({
  selector: "app-add-patient",
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    PatientInformationComponent,
    DiagnosisComponent,
    AttachDeviceComponent,
    PracticeInformationComponent,
    InsuranceInfoComponent,
  ],
  templateUrl: "./add-patient.component.html",
  styleUrl: "./add-patient.component.scss",
})
export class AddPatientComponent {
  categories: string[] = [
    "Patient Information",
    "Diagnosis",
    "Attach a Device",
    "Practice Information",
    "Primary Insurance Info",
  ];
}
