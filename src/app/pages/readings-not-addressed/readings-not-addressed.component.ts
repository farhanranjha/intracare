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
import { readingNotAddressedRows } from "src/app/utils/constants/mock-data";

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

  patientss: any[] = readingNotAddressedRows;

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
