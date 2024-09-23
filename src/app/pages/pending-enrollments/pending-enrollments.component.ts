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
import { TableComponent } from "../../components/table/table.component";
import { CustomFilterComponent } from "../../components/table/custom-filter/custom-filter.component";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";

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
    CustomFilterComponent,
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
  @ViewChild("customFilter", { static: true }) customFilter: any;

  searchValue: string = "";
  loading: boolean = false;
  displayEditDialog: boolean = false;
  selectedPatient: any = null;
  columns: any[] = [];

  patients: any[] = pendingEnrollmentsRows;

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
  onCheckboxChange(selectedOptions: string[]) {
    console.log("Selected options: ", selectedOptions);
  }
}
