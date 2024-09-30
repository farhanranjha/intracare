import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { TableModule, Table } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { PatientEnrollmentEditModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-edit-modal/patient-enrollment-edit-modal.component";
import { PatientEnrollmentUpdateModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-update-modal/patient-enrollment-update-modal.component";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { TableComponent } from "../../components/table/table.component";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: "app-patient-chart",
  standalone: true,
  imports: [ButtonModule, CommonModule, ProgressBarModule, TabViewModule, TableModule, TableComponent, TabMenuModule],
  templateUrl: "./patient-chart.component.html",
  styleUrl: "./patient-chart.component.scss",
})
export class PatientChartComponent {
  activeIndex: number = 0;
  activeTab: string = 'General'
  activeBtn: string = "none";



  activeRpmSubTabIndex: number = 0;



  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: any;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: any;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: any;
  @ViewChild("customFilter", { static: true }) customFilter: any;
  @ViewChild(PatientEnrollmentEditModalComponent) editModalComponent!: PatientEnrollmentEditModalComponent;
  @ViewChild(PatientEnrollmentUpdateModalComponent) updateModalComponent!: PatientEnrollmentUpdateModalComponent;

  constructor(public layoutService: LayoutService) {}

  activeRPMCCM: string = ''

  columns: any[] = [];
  patients: any[] = pendingEnrollmentsRows;

  value: string | undefined;
  isEditing: boolean = false;
  newValue: string = "";

  
  selectTab(index: number) {
    this.activeIndex = index;
  }

  editNotes() {
    this.isEditing = true;
    this.newValue = this.value;
    console.log("Entering edit mode:", this.isEditing);
  }

  updateNotes() {
    console.log("new value before update:", this.newValue);
    this.value = this.newValue;
    this.isEditing = false;
    console.log("Updated notes:", this.value);
  }

  changeTheme() {
    this.layoutService.changeTheme();
  }

  ngOnInit() {


    this.value = "Verbally agreed to text reminders and alerts related to the diagnosis";
    this.columns = [
      { name: "Date", field: "date", filterType: "date" },
      {
        name: "Patient Name",
        field: "name",
        filterType: "text",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      { name: "Practice", field: "practice", filterType: "text" },
      { name: "Device Type", field: "deviceType", filterType: "text" },
      {
        name: "Program Type",
        field: "programType",
        filterType: "custom",
        isCustom: true,
        template: this.programTypeTemplate,
        filterTemplate: this.customFilter,
        options: ["RPM", "CCM"],
      },
      { name: "Status", field: "status", filterType: "text", isCustom: true, template: this.statusTemplate },
      { name: "Progress", field: "progress", filterType: "numeric", isCustom: true, template: this.progressTemplate },
      { name: "Consent", field: "consent", filterType: "text", isCustom: true, template: this.consentTemplate },
      {
        name: "Edit / Update",
        field: "",
        isCustom: true,
        template: this.editUpdateTemplate,
        filterType: "none",
      },
    ];
    
  }

  profileSections = [
    { title: 'Clinical Information', data: [
      { label: 'EHR ID', value: '0175' },
      { label: 'Allergies', value: '(214) 284-0175' },
      { label: 'Diagnosis', value: '(214) 284-0175' },
      { label: 'Clinic Notes', value: 'Hypertension' },
      { label: 'Consent', value: 'Hypertension' },
      { label: 'Billing Diagnosis', value: 'Hypertension' },
    ]},
    // Contact Information Section
    { 
      title: 'Contact Information', 
      data: [
        { label: 'Emergency Contact Name', value: '-' },
        { label: 'Emergency Contact Number', value: '-' },
        { label: 'Address', value: 'Hypertension' },
        { label: 'ZIP Code', value: '76022' },
        { label: 'Email', value: 'bitemplenames@gmail.com' },
        { label: 'Language', value: 'English' },
      ] 
    },
  
    // Baseline Biometrics Section
    { 
      title: 'Baseline Biometrics', 
      data: [
        { label: 'Blood Pressure', value: '128/94 mmhg' },
        { label: 'Blood Pressure Stage', value: 'Hypertension Stage 2', type: 'alert' }, // Add this for stage 2 alert
        { label: 'Cholesterol', value: '-' },
        { label: 'Height', value: 'Hypertension' },
        { label: 'Blood Glucose', value: '76022' },
        { label: 'Weight', value: 'bitemplenames@gmail.com' },
      ] 
    },
  
    // Baseline Details Section
    { 
      title: 'Baseline Details', 
      data: [
        { label: 'Pre-Registered By', value: 'Vicki Hagler' },
        { label: 'Pre-Registered Date', value: 'Oct 18, 2023' },
        { label: 'Registered By', value: 'Sachin Kumar' },
        { label: 'Registration Date', value: 'Oct 24, 2023' },
      ] 
    },
  
    // Patient Notification Control Section
    { 
      title: 'Patient Notification Control', 
      data: [
        { label: 'Text/SMS', value: 'Opt-in for text/sms notifications', type: 'toggle' }, 
        { label: 'Daily Reminder SMS', value: 'Opt-in to get Daily Reminder', type: 'toggle' },
        { label: 'Daily Reminder Time', value: '12:00', type: 'time' },
        { label: 'General/Holiday/Birthday/Newsletter', value: 'Opt-in to get a newsletter or other SMS', type: 'toggle' },
        { label: 'Email', value: 'To get emails', type: 'toggle' },
        { label: 'Birthday Email', value: 'Birthday Email', type: 'toggle' },
      ] 
    },
  ];
  


  activeProfileItem = this.profileSections[0];


  setActiveProfileItem(item: any) {    
    this.activeProfileItem = item;
  }


  setActiveRpmSubTab(index: number) {
    this.activeRpmSubTabIndex = index;
  }

  openEditModal() {
    if (this.editModalComponent) {
      this.editModalComponent.openModal();
    }
  }
  openUpdateModal() {
    if (this.updateModalComponent) {
      this.updateModalComponent.openModal();
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setActiveBtn(tab: string) {
    console.log(tab);

    this.activeBtn = tab;
  }
  setRPMCCM(tab: string) {
    this.activeRPMCCM = tab;
  }
  
}
