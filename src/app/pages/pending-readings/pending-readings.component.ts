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
import { pendingReadingsRows } from "src/app/utils/constants/mock-data";

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

  patients: any[] = pendingReadingsRows;

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
