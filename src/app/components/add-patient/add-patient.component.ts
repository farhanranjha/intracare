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
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      patientInfo: this.formBuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        gender: ["", Validators.required],
        dob: ["", Validators.required],
        ethnicity: ["", Validators.required],
        mailingAddress: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        city: ["", Validators.required],
        zipCode: ["", Validators.required],
        cellPhoneNumber: ["", Validators.required],
        homePhoneNumber: ["", Validators.required],
        preferredLanguage: ["", Validators.required],
      }),
      diagnosis: this.formBuilder.group({
        diagnosis: ["", Validators.required],
        ehrId: ["", Validators.required],
        emergencyContact: ["", Validators.required],
        emergencyContactNumber: ["", Validators.required],
        programType: ["", Validators.required],
        careType: ["", Validators.required],
        monitoringDeviceRequired: ["", Validators.required],
        textSmsConsent: ["", Validators.required],
        programBillingDiagnosis: ["", Validators.required],
      }),
      attachDevice: this.formBuilder.group({
        deviceName: ["", Validators.required],
        serialId: ["", Validators.required],
      }),
      practiceInfo: this.formBuilder.group({
        practiceName: ["", Validators.required],
        primaryCarePhysician: ["", Validators.required],
        officeNumber: ["", Validators.required],
        primaryPhysicianChecked: [false],
        officeNumber2: ["", Validators.required],
        officeNumber3: ["", Validators.required],
      }),
      insuranceInfo: this.formBuilder.group({
        insuranceName: ["", Validators.required],
        insuranceState: ["", Validators.required],
        groupNumber: ["", Validators.required],
        subscriberDOB: ["", Validators.required],
        policyNumber: ["", Validators.required],
        subscriberName: ["", Validators.required],
        subscriberID: ["", Validators.required],
        city: ["", Validators.required],
        zipCode: ["", Validators.required],
        claimMailingAddress: ["", Validators.required],
        state: ["", Validators.required],
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

  extractFields(group: any): any[] {
    return Object.keys(group).map((key) => ({ label: key, value: group[key] }));
  }
}
