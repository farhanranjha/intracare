import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
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
export class AddPatientComponent implements AfterViewInit {
  name: string = "Farhan Ranjha";
  categories: string[] = [
    "Patient Information",
    "Diagnosis",
    "Attach a Device",
    "Practice Information",
    "Primary Insurance Info",
  ];
  selectedCategory: string = this.categories[0];
  currentTopContainer: string = this.categories[0];
  @ViewChild("componentContainer") componentContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.onScroll();
  }

  scrollToComponent(index: number) {
    this.selectedCategory = this.categories[index];

    const componentIds = ["patientInformation", "diagnosis", "attachDevice", "practiceInformation", "insuranceInfo"];

    const element = document.getElementById(componentIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  onScroll() {
    const componentContainer = this.componentContainer.nativeElement;
    const components = [
      document.getElementById("patientInformation"),
      document.getElementById("diagnosis"),
      document.getElementById("attachDevice"),
      document.getElementById("practiceInformation"),
      document.getElementById("insuranceInfo"),
    ];

    let closestComponentIndex = 0;
    let smallestOffset = Infinity;

    components.forEach((component, index) => {
      if (component) {
        const offset = component.getBoundingClientRect().top - componentContainer.getBoundingClientRect().top;
        if (offset >= 0 && offset < smallestOffset) {
          smallestOffset = offset;
          closestComponentIndex = index;
        }
      }
    });

    this.currentTopContainer = this.categories[closestComponentIndex];
  }
}
