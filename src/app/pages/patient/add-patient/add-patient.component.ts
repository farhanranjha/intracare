import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientInformationComponent } from "./components/patient-information/patient-information.component";
import { DiagnosisComponent } from "./components/diagnosis/diagnosis.component";
import { AttachDeviceComponent } from "./components/attach-device/attach-device.component";
import { PracticeInformationComponent } from "./components/practice-information/practice-information.component";
import { InsuranceInfoComponent } from "./components/insurance-info/insurance-info.component";
import { DialogModule } from "primeng/dialog";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

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
    ReactiveFormsModule,
    DialogModule,
  ],
  templateUrl: "./add-patient.component.html",
  styleUrl: "./add-patient.component.scss",
})
export class AddPatientComponent implements AfterViewInit {
  form: FormGroup;
  visible: boolean = false;
  formGroups: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      patientInfo: this.formBuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        gender: [""],
        dob: [""],
        ethnicity: [""],
        mailingAddress: [""],
        email: [""],
        city: [""],
        zipCode: [""],
        cellPhoneNumber: [""],
        homePhoneNumber: [""],
        preferredLanguage: [""],
      }),
      diagnosis: this.formBuilder.group({
        diagnosis: [""],
        ehrId: [""],
        emergencyContact: [""],
        emergencyContactNumber: [""],
        programType: [""],
        careType: [""],
        monitoringDeviceRequired: [""],
        textSmsConsent: [""],
        programBillingDiagnosis: [""],
      }),
      attachDevice: this.formBuilder.group({
        devices: this.formBuilder.array([
          this.formBuilder.group({
            deviceName: [""],
            serialId: [""],
            isDisabled: [false],
          }),
        ]),
      }),
      practiceInfo: this.formBuilder.group({
        practiceName: [""],
        primaryCarePhysician: [""],
        officeNumber: [""],
        primaryPhysicianChecked: [false],
        officeNumber2: [""],
        officeNumber3: [""],
      }),
      insuranceInfo: this.formBuilder.group({
        insuranceName: [""],
        insuranceState: [""],
        groupNumber: [""],
        subscriberDOB: [""],
        policyNumber: [""],
        subscriberName: [""],
        subscriberID: [""],
        city: [""],
        zipCode: [""],
        claimMailingAddress: [""],
        state: [""],
      }),
    });
  }
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
    if (this.componentContainer) {
      this.onScroll();
    }
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
    if (!this.componentContainer) return;
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
  showDialog() {
    this.visible = true;

    const formValues = this.form.getRawValue();
    this.formGroups = [
      { title: "Patient Information", fields: this.extractFields(formValues.patientInfo) },
      { title: "Diagnosis", fields: this.extractFields(formValues.diagnosis) },
      { title: "Attach Device", fields: this.extractFields(formValues.attachDevice) },
      { title: "Practice Information", fields: this.extractFields(formValues.practiceInfo) },
      { title: "Insurance Information", fields: this.extractFields(formValues.insuranceInfo) },
    ];
  }

  hideDialogAndNavigate() {
    this.visible = false;
    this.router.navigate(["patient/pending-enrollments"]);
  }

  extractFields(group: any): any[] {
    return Object.keys(group).map((key) => ({ label: key, value: group[key] }));
  }
}
