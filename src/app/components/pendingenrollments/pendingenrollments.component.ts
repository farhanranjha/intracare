import { Component } from "@angular/core";
import { TableModule } from "primeng/table";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { MultiSelectModule } from "primeng/multiselect";
import { DialogModule } from "primeng/dialog";
import { debounceTime, Subject } from "rxjs";
import { ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { TableComponent } from "../table/table.component";

@Component({
  selector: "app-pending-enrollments",
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    ProgressBarModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    DialogModule,
    TableComponent,
  ],
  templateUrl: "./pending-enrollments.component.html",
  styleUrl: "./pending-enrollments.component.scss",
})
export class PendingEnrollmentsComponent {
  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: any;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: any;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: any;

  searchValue: string = "";
  loading: boolean = false;
  displayEditDialog: boolean = false;
  selectedPatient: any = null;
  columns: any[] = [];

  patients: any[] = [
    {
      date: "July 22, 2024",
      name: "Thomas Blackwood",
      dob: "10/16/1951",
      practice: "East Valley Family Physicians",
      deviceType: "BP",
      programType: ["RPM, CCM"],
      status: "First Call",
      progress: 75,
      consent: "Yes",
    },
    {
      date: "July 22, 2024",
      name: "James Huddleson",
      dob: "06/23/1980",
      practice: "East Valley Family Physicians",
      deviceType: "BP",
      programType: ["RPM, CCM"],
      status: "Second Call",
      progress: 45,
      consent: "Yes",
    },
    {
      date: "July 22, 2024",
      name: "Jim Carter",
      dob: "02/26/1980",
      practice: "East Valley Family Physicians",
      deviceType: "BP",
      programType: ["RPM, CCM"],
      status: "First Call",
      progress: 25,
      consent: "Yes",
    },
    {
      date: "July 22, 2024",
      name: "Chris Hemsworth",
      dob: "12/03/1987",
      practice: "East Valley Family Physicians",
      deviceType: "BP",
      programType: ["RPM, CCM"],
      status: "First Call",
      progress: 100,
      consent: "No",
    },
  ];

  private searchSubject: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(300)).subscribe((value) => {
      if (this.dt1) {
        this.dt1.filterGlobal(value, "contains");
      }
    });
    this.columns = [
      { name: "Date", field: "date", filterType: "date" },
      {
        name: "Patient Name",
        field: "patient.name",
        filterType: "text",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      { name: "Practice", field: "practice", filterType: "text" },
      { name: "Device Type", field: "deviceType", filterType: "text" },
      {
        name: "Program Type",
        field: "programType",
        filterType: "text",
        isCustom: true,
        template: this.programTypeTemplate,
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

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  clear(table: any) {
    this.searchValue = "";
    table.clear();
  }

  showEditDialog(patient: any) {
    this.selectedPatient = patient;
    this.displayEditDialog = true;
  }
}
