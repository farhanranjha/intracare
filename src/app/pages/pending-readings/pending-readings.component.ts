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
import { ColumnConfig, TableComponent } from "../../components/table/table.component";

@Component({
  selector: "app-pending-readings",
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    SelectButtonModule,
    TableComponent,
  ],
  templateUrl: "./pending-readings.component.html",
  styleUrl: "./pending-readings.component.scss",
})
export class PendingReadingsComponent implements OnInit {
  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("trackingTemplate", { static: true }) trackingTemplate: any;
  @ViewChild("shippingTemplate", { static: true }) shippingTemplate: any;

  searchValue: string = "";
  loading: boolean = false;
  viewType: string = "grid";
  columns: ColumnConfig[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  viewOptions = [
    { label: "", value: "grid", icon: "pi pi-th-large" },
    { label: "", value: "list", icon: "pi pi-bars" },
  ];

  patients: any[] = [
    {
      id: 7158,
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      dob: "NOV 24, 1950",
      name: "Diana Case",
      type: ["RPM", "CCM"],
      medicare: "Medicare",
      practice: "IntraCare Health Center - Fort Worth",
      provider: "Dr Smith",
      date: "Jul 23 2024",
      trackingStatus: "NO_TRACKING",
      shipped: true,
      trackingDescription: "Non Tracking",
      stageClass: "text-red-500",
      statusClass: "bg-green-100 text-green-700",
    },
    {
      id: 7040,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      dob: "JAN 12, 1984",
      name: "Gabrielle Hanes",
      type: ["RPM", "CCM"],
      medicare: "Medicare",
      practice: "Prime MD Geriatrics",
      provider: "Dr Kevin",
      date: "Dec 23 2023",
      trackingStatus: "TRACKING",
      shipped: false,
      trackingDescription: "Tracking",
      stageClass: "text-red-500",
      statusClass: "bg-green-100 text-green-700",
    },
    {
      id: 7451,
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      dob: "MAY 14, 1975",
      name: "Samantha Walters",
      type: ["CCM"],
      medicare: "Medicare",
      practice: "Downtown Family Care",
      provider: "Dr Williams",
      date: "Sep 15 2023",
      trackingStatus: "TRACKING",
      shipped: true,
      trackingDescription: "Tracking",
      stageClass: "text-blue-500",
      statusClass: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 7530,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      dob: "OCT 01, 1962",
      name: "Michael Harper",
      type: ["RPM"],
      medicare: "Medicare Advantage",
      practice: "Parkway Healthcare",
      provider: "Dr Allen",
      date: "Aug 17 2024",
      trackingStatus: "NO_TRACKING",
      shipped: false,
      trackingDescription: "Non Tracking",
      stageClass: "text-red-500",
      statusClass: "bg-green-100 text-green-700",
    },
    {
      id: 7673,
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      dob: "FEB 28, 1992",
      name: "Jessica Green",
      type: ["RPM", "CCM"],
      medicare: "Medicare",
      practice: "Cedar Park Health Clinic",
      provider: "Dr Garcia",
      date: "Jul 5 2024",
      trackingStatus: "TRACKING",
      shipped: true,
      trackingDescription: "Tracking",
      stageClass: "text-blue-500",
      statusClass: "bg-blue-100 text-blue-700",
    },
    {
      id: 7123,
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      dob: "MAR 11, 1955",
      name: "Brian Jennings",
      type: ["CCM"],
      medicare: "Medicare",
      practice: "Oak Ridge Medical Center",
      provider: "Dr Johnson",
      date: "Jun 21 2024",
      trackingStatus: "NO_TRACKING",
      shipped: false,
      trackingDescription: "Non Tracking",
      stageClass: "text-red-500",
      statusClass: "bg-red-100 text-red-700",
    },
    {
      id: 7891,
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      dob: "APR 18, 1980",
      name: "Nancy Stephens",
      type: ["RPM"],
      medicare: "Medicare Advantage",
      practice: "Sunshine Health Partners",
      provider: "Dr Adams",
      date: "Oct 9 2023",
      trackingStatus: "TRACKING",
      shipped: true,
      trackingDescription: "Tracking",
      stageClass: "text-blue-500",
      statusClass: "bg-green-100 text-green-700",
    },
    {
      id: 7325,
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      dob: "JUL 22, 1978",
      name: "James Washington",
      type: ["RPM", "CCM"],
      medicare: "Medicare",
      practice: "Pine Grove Medical",
      provider: "Dr Thompson",
      date: "Sep 29 2024",
      trackingStatus: "NO_TRACKING",
      shipped: false,
      trackingDescription: "Non Tracking",
    },
    {
      id: 7152,
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      dob: "DEC 10, 1966",
      name: "Ashley Turner",
      type: ["CCM"],
      medicare: "Medicare Advantage",
      practice: "Northwest Health Group",
      provider: "Dr Parker",
      date: "Nov 30 2023",
      trackingStatus: "TRACKING",
      shipped: true,
      trackingDescription: "Tracking",
      stageClass: "text-blue-500",
      statusClass: "bg-green-100 text-green-700",
    },
    {
      id: 7982,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      dob: "AUG 5, 1970",
      name: "David Carter",
      type: ["RPM", "CCM"],
      medicare: "Medicare",
      practice: "Southwest Medical Group",
      provider: "Dr Anderson",
      date: "May 13 2024",
      trackingStatus: "NO_TRACKING",
      shipped: false,
      trackingDescription: "Non Tracking",
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
        name: "Care/Program Type",
        field: "type",
        filterType: "none",
        isCustom: true,
        template: this.programTypeTemplate,
      },
      {
        name: "Practice",
        field: "practice",
        filterType: "none",
      },
      {
        name: "Provider",
        field: "provider",
        filterType: "none",
      },
      {
        name: "Created",
        field: "date",
        filterType: "none",
      },
      {
        name: "Tracking Status",
        field: "trackingStatus",
        filterType: "none",
        isCustom: true,
        template: this.trackingTemplate,
      },
      {
        name: "Shipped",
        field: "shipped",
        filterType: "numeric",
        isCustom: true,
        template: this.shippingTemplate,
      },
      {
        name: "Tracking Description",
        field: "trackingDescription",
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

  toggleView(view: string) {
    this.viewType = view;
  }
}
