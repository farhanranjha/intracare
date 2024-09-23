import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { MultiSelectModule } from "primeng/multiselect";
import { debounceTime, Subject } from "rxjs";
import { ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { SelectButtonModule } from "primeng/selectbutton";
import { CalendarModule } from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ColumnConfig, TableComponent } from "../../components/table/table.component";

@Component({
  selector: "app-readings-not-addressed",
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    SelectButtonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableComponent,
  ],
  templateUrl: "./readings-not-addressed.component.html",
  styleUrl: "./readings-not-addressed.component.scss",
})
export class ReadingsNotAddressedComponent implements OnInit {
  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("stageTemplate", { static: true }) stageTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;

  searchValue: string = "";
  loading: boolean = false;
  viewType: string = "grid";
  dateRange: Date[] = [];
  selectedReadingTypes: string[] = [];
  selectedBloodPressure: string = "";
  selectedBloodGlucose: string = "";
  columns: ColumnConfig[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  viewOptions = [
    { label: "", value: "grid", icon: "pi pi-th-large" },
    { label: "", value: "list", icon: "pi pi-bars" },
  ];

  readingTypeOptions = [
    { label: "Blood Pressure", value: "Blood Pressure" },
    { label: "Blood Sugar", value: "Blood Sugar" },
    { label: "Heart Rate", value: "Heart Rate" },
    { label: "Cholesterol", value: "Cholesterol" },
  ];

  bloodPressureOptions = [
    { label: "All", value: "All" },
    { label: "Systolic more than 139", value: "Systolic more than 139" },
    { label: "Systolic less than 120", value: "Systolic less than 120" },
  ];

  bloodGlucoseOptions = [
    { label: "All", value: "All" },
    { label: "Less than 100 mg/dL", value: "Less than 100" },
    { label: "100-125 mg/dL", value: "100-125" },
    { label: "More than 125 mg/dL", value: "More than 125" },
  ];

  patientss: any[] = [
    {
      id: 7158,
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      name: "Diana Case",
      practice: "IntraCare Health Center - Fort Worth",
      date: "Jul 23 2024",
      readingType: "Blood Pressure",
      reading: "147/81",
      stage: "Hypertension Stage 2",
      stageClass: "text-red-500",
      source: "Tupelolife",
      status: true,
    },
    {
      id: 7040,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Gabrielle Hanes",
      practice: "Prime MD Geriatrics",
      date: "Jul 23 2024",
      readingType: "Blood Pressure",
      reading: "153/93",
      stage: "Hypertension Stage 2",
      stageClass: "text-red-500",
      source: "Tupelolife",
      status: false,
    },
    {
      id: 9083,
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Marta Griffin",
      practice: "Parkway Medical Center",
      date: "Jun 15 2024",
      readingType: "Heart Rate",
      reading: "88 bpm",
      stage: "Normal",
      stageClass: "text-green-500",
      source: "Fitbit",
      status: true,
    },
    {
      id: 3457,
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      name: "John Doe",
      practice: "Eastside Health Clinic",
      date: "Sep 5 2024",
      readingType: "Blood Sugar",
      reading: "125 mg/dL",
      stage: "Pre-diabetes",
      stageClass: "text-yellow-500",
      source: "Glucolife",
      status: false,
    },
    {
      id: 5674,
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Emily Foster",
      practice: "Central Wellness Clinic",
      date: "Aug 12 2024",
      readingType: "Cholesterol",
      reading: "220 mg/dL",
      stage: "Borderline High",
      stageClass: "text-orange-500",
      source: "LabCorp",
      status: true,
    },
    {
      id: 1823,
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      name: "James Taylor",
      practice: "Bay Area Health Center",
      date: "Oct 1 2024",
      readingType: "Blood Pressure",
      reading: "130/85",
      stage: "Pre-hypertension",
      stageClass: "text-yellow-500",
      source: "Omron",
      status: false,
    },
    {
      id: 6245,
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Sandra Mitchell",
      practice: "Sunrise Family Health",
      date: "May 30 2024",
      readingType: "Heart Rate",
      reading: "102 bpm",
      stage: "Elevated",
      stageClass: "text-red-500",
      source: "Apple Watch",
      status: true,
    },
    {
      id: 8792,
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      name: "Aaron Black",
      practice: "Greenwood Medical Center",
      date: "Apr 20 2024",
      readingType: "Blood Sugar",
      reading: "95 mg/dL",
      stage: "Normal",
      stageClass: "text-green-500",
      source: "Dexcom",
      status: true,
    },
    {
      id: 9321,
      image: "https://randomuser.me/api/portraits/women/70.jpg",
      name: "Jessica Brown",
      practice: "Westside Health Clinic",
      date: "Mar 18 2024",
      readingType: "Cholesterol",
      reading: "190 mg/dL",
      stage: "Desirable",
      stageClass: "text-green-500",
      source: "LabCorp",
      status: false,
    },
    {
      id: 4519,
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      name: "Michael Harris",
      practice: "Downtown Medical Center",
      date: "Jan 10 2024",
      readingType: "Blood Pressure",
      reading: "160/100",
      stage: "Hypertension Stage 2",
      stageClass: "text-red-500",
      source: "Withings",
      status: false,
    },
  ];

  ngOnInit() {
    this.columns = [
      {
        name: "Patient",
        field: "name",
        filterType: "none",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      {
        name: "Practice",
        field: "practice",
        filterType: "none",
      },
      {
        name: "Date",
        field: "date",
        filterType: "none",
      },
      {
        name: "Reading Type",
        field: "readingType",
        filterType: "none",
      },
      {
        name: "Reading",
        field: "reading",
        filterType: "numeric",
      },
      {
        name: "Stage",
        field: "stage",
        filterType: "none",
        isCustom: true,
        template: this.stageTemplate,
      },
      {
        name: "Source",
        field: "source",
        filterType: "none",
      },
      {
        name: "Status",
        field: "status",
        filterType: "none",
        isCustom: true,
        template: this.statusTemplate,
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

  toggleView(view: string) {
    this.viewType = view;
  }

  onDateRangeChange() {
    if (this.dateRange && this.dateRange.length === 2) {
      const startDate = this.dateRange[0];
      const endDate = this.dateRange[1];
      this.dt1.filter([startDate, endDate], "date", "in");
    }
  }

  onReadingTypeChange() {
    if (this.selectedReadingTypes.length > 0) {
      this.dt1.filter(this.selectedReadingTypes, "readingType", "in");
    } else {
      // this.dt1.clearFilter('readingType');
    }
  }

  onBloodPressureChange() {
    this.dt1.filter(this.selectedBloodPressure, "bloodPressure", "equals");
  }

  onBloodGlucoseChange() {
    this.dt1.filter(this.selectedBloodGlucose, "bloodGlucose", "equals");
  }
}
