import { CommonModule } from "@angular/common";
import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { TableModule, Table } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { PatientEnrollmentEditModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-edit-modal/patient-enrollment-edit-modal.component";
import { PatientEnrollmentUpdateModalComponent } from "src/app/components/patient-enrollment-modal/patient-enrollment-update-modal/patient-enrollment-update-modal.component";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { TabMenuModule } from 'primeng/tabmenu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableComponent } from "src/app/components/table/table.component";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";


@Component({
  selector: "app-patient-chart",
  standalone: true,
  imports: [ButtonModule, DialogModule, CommonModule, ProgressBarModule, TabViewModule, TableModule, TableComponent, TabMenuModule, ToggleButtonModule, DropdownModule, FormsModule, CalendarModule, CheckboxModule],
  templateUrl: "./patient-chart.component.html",
  styleUrl: "./patient-chart.component.scss",
})
export class PatientChartComponent {
  taskDescription: string = "";
  assignTo: string = "";
  dueDate: Date | undefined;
  dueTime: string | undefined;
  selectedPriority: string = "";
  notificationEmail: boolean = false;
  notificationText: boolean = false;

  tasks: any[] = [];

  timeOptions = [
    { label: '12:00 AM', value: '00:00' },
    { label: '01:00 AM', value: '01:00' },
    { label: '02:00 AM', value: '02:00' },
    { label: '03:00 AM', value: '03:00' },
    { label: '04:00 AM', value: '04:00' },
    { label: '05:00 AM', value: '05:00' },
    { label: '06:00 AM', value: '06:00' },
    { label: '07:00 AM', value: '07:00' },
    { label: '08:00 AM', value: '08:00' },
    { label: '09:00 AM', value: '09:00' },
    { label: '10:00 AM', value: '10:00' },
    { label: '11:00 AM', value: '11:00' },
    { label: '12:00 PM', value: '12:00' },
    { label: '01:00 PM', value: '13:00' },
    { label: '02:00 PM', value: '14:00' },
    { label: '03:00 PM', value: '15:00' },
    { label: '04:00 PM', value: '16:00' },
    { label: '05:00 PM', value: '17:00' },
    { label: '06:00 PM', value: '18:00' },
    { label: '07:00 PM', value: '19:00' },
    { label: '08:00 PM', value: '20:00' },
    { label: '09:00 PM', value: '21:00' },
    { label: '10:00 PM', value: '22:00' },
    { label: '11:00 PM', value: '23:00' },
  ];

  memberOptions = [
    { label: 'Kashif Rathore', value: 'Kashif Rathore' },
    { label: 'Ajmal Shami (You)', value: 'Ajmal Shami' }
  ];

  selectPriority(priority: string) {
    this.selectedPriority = priority;
  }
  
  
  createTask() {
    if (!this.dueDate || !this.dueTime) {
      console.error("Due Date and Due Time are required.");
      return;
    }

    const dueDateTime = new Date(this.dueDate);
    const [hours, minutes] = this.dueTime.split(':');
    dueDateTime.setHours(+hours);
    dueDateTime.setMinutes(+minutes);

    const currentDateTime = new Date();

    if (dueDateTime < currentDateTime) {
      alert('Please provide a correct due date and time');
      return;
    }

    const timestamp = Date.now();
    const dateObj = new Date(timestamp);

    const formattedDate = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const formattedTime = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    const newTask = {
      createdAt: formattedDateTime,
      description: this.taskDescription,
      assignedTo: this.assignTo,
      priority: this.selectedPriority,
      dueDatetime: dueDateTime,
      assignedBy: 'Ajmal Shami',
      notifications: {
        email: this.notificationEmail,
        text: this.notificationText,
      },
      status: 'Incomplete',
    };

    this.tasks.push(newTask);
    
    console.log("Task added:", newTask);

    this.resetForm();
  }

  resetForm() {
    this.taskDescription = "";
    this.assignTo = "";
    this.dueDate = undefined;
    this.dueTime = undefined;
    this.selectedPriority = "";
    this.notificationEmail = false;
    this.notificationText = false;
  }

  activeIndex: number = 0;
  activeRPMCCM: string = ''
  activeTab: string = 'General'
  activeBtn: string = "none";
  activeGeneralSubTabIndex: number = 0;
  displayModal: boolean = false;
  patientName: string = 'M "Minnie" Henderson Covington'
  openTaskModal() {
    this.displayModal = true;
  }
  cancel() {
    this.displayModal = false;
  }


  activeRpmSubTabIndex: number = 0;

  tasksHeader: any[] = [];
  alertsHeader: any[] = [];
  alerts: any[] = [];

  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: any;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: any;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: any;
  @ViewChild("customFilter", { static: true }) customFilter: any;
  @ViewChild('priorityTemplate', { static: true }) priorityTemplate!: TemplateRef<any>;
  @ViewChild('dueDatetimeTemplate', { static: true }) dueDatetimeTemplate!: TemplateRef<any>;
  @ViewChild(PatientEnrollmentEditModalComponent) editModalComponent!: PatientEnrollmentEditModalComponent;
  @ViewChild(PatientEnrollmentUpdateModalComponent) updateModalComponent!: PatientEnrollmentUpdateModalComponent;

  constructor(public layoutService: LayoutService) {}

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
  }

  updateNotes() {
    this.value = this.newValue;
    this.isEditing = false;
  }

  changeTheme() {
    this.layoutService.changeTheme();
  }

  ngOnInit() {
    this.value = "Verbally agreed to text reminders and alerts related to the diagnosis";

      this.tasksHeader = [
        { name: 'Created At', field: 'createdAt', filterType: 'date', sortable: true },
        { name: 'Assigned To', field: 'assignedTo', filterType: 'text', sortable: true },
        { name: 'Assigned By', field: 'assignedBy', filterType: 'text', sortable: true },
        { name: 'Description', field: 'description', filterType: 'text', sortable: true },
        { name: 'Priority', field: 'priority', filterType: 'text', isCustom: true, template: this.priorityTemplate },
        { name: 'Due Datetime', field: 'dueDatetime', filterType: 'date', isCustom: true, template: this.dueDatetimeTemplate },
        { name: 'Status', field: 'status', filterType: 'text', isCustom: true, template: this.statusTemplate }
      ];
  
      this.tasks = [
        {
          createdAt: 'Sep 24, 2024, 5:45 PM',
          assignedTo: 'Kashif Rather',
          assignedBy: 'Ajmal Shami',
          description: 'This is a test task',
          priority: 'Low',
          dueDatetime: 'Sep 30, 2024, 03:45 AM',
          status: 'Incomplete'
        },
        {
          createdAt: 'Sep 22, 2020, 5:45 PM',
          assignedTo: 'Kashif Rather',
          assignedBy: 'Ajmal Shami',
          description: 'This is a test task2',
          priority: 'Medium',
          dueDatetime: 'Sep 30, 2024, 03:45 AM',
          status: 'Complete'
        },
        {
          createdAt: 'Jul 20, 2024, 10:30 PM',
          assignedTo: 'Kashif Rather',
          assignedBy: 'Ajmal Shami',
          description: 'This is a test task3',
          priority: 'High',
          dueDatetime: 'Sep 30, 2024, 03:45 AM',
          status: 'Complete'
        }
      ];
  
      this.alertsHeader = [
        { name: 'Alert DateTime', field: 'alertDateTime', filterType: 'date' },
        { name: 'Reading Type', field: 'readingType', filterType: 'text' },
        { name: 'Alert Type', field: 'alertType', filterType: 'text' },
        { name: 'Reading DateTime', field: 'readingDateTime', filterType: 'date' },
        { name: 'Reading', field: 'reading', filterType: 'text' },
        { name: 'Stage', field: 'stage', filterType: 'text' },
        { name: 'Note', field: 'note', filterType: 'text' }
      ];
  
      this.alerts = [
        {
          alertDateTime: '2024-09-26 10:00 AM',
          readingType: 'Blood Pressure',
          alertType: 'High',
          readingDateTime: '2024-09-26 10:00 AM',
          reading: '140/90',
          stage: 'Normal',
          note: 'Take medication'
        },
        {
          alertDateTime: '2024-09-25 11:30 AM',
          readingType: 'Heart Rate',
          alertType: 'Normal',
          readingDateTime: '2024-09-25 11:30 AM',
          reading: '72 bpm',
          stage: 'Below Normal',
          note: 'No action required'
        },
        {
          alertDateTime: '2024-09-24 9:15 AM',
          readingType: 'Oxygen Saturation',
          alertType: 'Low',
          readingDateTime: '2024-09-24 9:15 AM',
          reading: '89%',
          stage: 'Cold',
          note: 'Check breathing'
        }
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
    { 
      title: 'Baseline Details', 
      data: [
        { label: 'Pre-Registered By', value: 'Vicki Hagler' },
        { label: 'Pre-Registered Date', value: 'Oct 18, 2023' },
        { label: 'Registered By', value: 'Sachin Kumar' },
        { label: 'Registration Date', value: 'Oct 24, 2023' },
      ] 
    },
    { 
      title: 'Patient Notification Control', 
      data: [
        { label: 'Text/SMS', value: 'Opt-in for text/sms notifications', type: 'toggle' }, 
        { label: 'General/Holiday/Birthday/Newsletter', value: 'Opt-in to get a newsletter or other SMS', type: 'toggle' },
        { label: ['Daily Reminder SMS'], value: ['Opt-in to get Daily Reminder','12:00'], type: 'toggle' },
        { label: ['Email','Birthday Email'], value: ['To get emails','Birthday Email'], type: ['toggle','toggle'] },
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

  setActiveGeneralSubTab(index: number) {
    this.activeGeneralSubTabIndex = index;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.activeGeneralSubTabIndex = 0
  }
  setRPMCCM(tab: string) {
    this.activeRPMCCM = tab;
  }

  setActiveBtn(tab: string) {
    console.log(tab);

    this.activeBtn = tab;
  }
}
