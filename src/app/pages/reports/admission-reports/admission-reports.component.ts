import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { IKeyValue } from "src/app/types/common-types";
import { IAdmissionReport } from "src/app/types/mock-data/mock-data-types";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { admissionReports } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-admission-reports",
  standalone: true,
  imports: [ButtonModule, TableComponent],
  templateUrl: "./admission-reports.component.html",
  styleUrls: ["./admission-reports.component.scss"],
})
export class AdmissionReportsComponent {
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate!: TemplateRef<any>;

  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter!: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  reports: IAdmissionReport[] = admissionReports;

  practicesOptions: IKeyValue[] = [
    { label: "Training Organization 1", value: "Training Organization 1" },
    { label: "Training Organization 2", value: "Training Organization 2" },
  ];

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.columns = [
      {
        name: "Name",
        field: "name",
        filterType: "none",
        isCustom: true,
        template: this.patientCardTemplate,
      },
      {
        name: "Enrollment Date",
        field: "enrollmentDate",
        filterType: "none",
      },
      {
        name: "Practice",
        field: "practiceName",
        filterType: "custom",
        filterTemplate: this.practiceNameFilter,
        sort: true,
      },
      {
        name: "Device Type",
        field: "deviceType",
        filterType: "none",
      },
      {
        name: "Last Transmission",
        field: "lastTransmission",
        filterType: "none",
      },
      {
        name: "Device Serial Number",
        field: "deviceSerialNumber",
        filterType: "none",
      },
      {
        name: "Registered By",
        field: "registeredBy",
        filterType: "none",
      },
    ];
  }
}
