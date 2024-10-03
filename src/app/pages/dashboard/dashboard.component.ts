import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { dashboardRows } from "src/app/utils/constants/mock-data";
import { DashboardRow, DashboardService } from "src/app/services/dashboard/dashboard.service";
import { LazyLoadEvent } from "primeng/api";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { formatDate } from "@angular/common";

@Component({
  templateUrl: "./dashboard.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: TemplateRef<any>;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: TemplateRef<any>;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: TemplateRef<any>;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: TemplateRef<any>;
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  rowData: any = [];
  totalRecords: number = 0;

  practices: any;

  constructor(
    private dashboardService: DashboardService,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // TODO: FIX this later
    this.dashboardService.getClinics().subscribe(({ data, total }) => {
      this.practices = data.map((row) => {
        return { value: row.id, label: row.name, checked: false };
      });
    });

    this.columns = [
      {
        name: "Patient Name",
        field: "name",
        filterType: "text",
        isCustom: true,
        template: this.patientCardTemplate,
        isFrozen: true,
      },
      {
        name: "Practice",
        field: "practiceName",
        filterType: "custom",
        filterTemplate: this.practiceNameFilter,
      },
      { name: "Device Type", field: "deviceType", filterType: "text" },
      {
        name: "Program Type",
        field: "programType",
        filterType: "text",
        isCustom: true,
        template: this.programTypeTemplate,
      },
      {
        name: "Date",
        field: "date",
        filterType: "date",
        valueFormatter: this.formatToUSDate,
      },
      { name: "Status", field: "status", filterType: "text", isCustom: true, template: this.statusTemplate },
      { name: "Progress", field: "progress", filterType: "numeric", isCustom: true, template: this.progressTemplate },
      { name: "Consent", field: "consent", filterType: "text", isCustom: true, template: this.consentTemplate },
    ];
  }

  formatToUSDate(date: string) {
    return formatDate(date, "MM/dd/YYYY", "en-US");
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.dashboardService.getDashboardData(event).subscribe(({ data, total }) => {
      this.rowData = data;
      this.totalRecords = total;
      this.cdRef.markForCheck();
    });
  }
}
