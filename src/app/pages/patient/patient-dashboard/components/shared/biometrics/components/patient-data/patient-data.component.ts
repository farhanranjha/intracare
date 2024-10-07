import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TableComponent } from "src/app/components/table/table.component";
import { IPendingEnrollments } from "src/app/types/mock-data/mock-data-types";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { pendingEnrollmentsRows } from "src/app/utils/constants/mock-data";

@Component({
  selector: "app-patient-data",
  standalone: true,
  imports: [TableComponent],
  templateUrl: "./patient-data.component.html",
  styleUrl: "./patient-data.component.scss",
})
export class PatientDataComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  source: string;
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: TemplateRef<any>;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: TemplateRef<any>;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: TemplateRef<any>;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: TemplateRef<any>;
  @ViewChild("editUpdateTemplate", { static: true }) editUpdateTemplate: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  patients: IPendingEnrollments[] = pendingEnrollmentsRows;

  ngOnInit(): void {
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
        filterType: "none",
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
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
