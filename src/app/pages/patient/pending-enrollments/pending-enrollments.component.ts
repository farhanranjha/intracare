import { CommonModule, formatDate } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { forkJoin } from "rxjs";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";
import { TableComponent } from "src/app/components/table/table.component";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";
import { IKeyValue } from "src/app/types/common-types";
import { ColumnConfig } from "src/app/types/table/generic-table-types";

@Component({
  selector: "app-pending-enrollments",
  standalone: true,
  imports: [CommonModule, TableComponent, ButtonModule, CustomFilterComponent, ProgressBarModule],
  templateUrl: "./pending-enrollments.component.html",
  styleUrl: "./pending-enrollments.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingEnrollmentsComponent {
  //Row templates
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: TemplateRef<any>;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: TemplateRef<any>;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild("progressTemplate", { static: true }) progressTemplate: TemplateRef<any>;
  @ViewChild("consentTemplate", { static: true }) consentTemplate: TemplateRef<any>;

  //Filter templates
  @ViewChild("practiceNameFilter", { static: true }) practiceNameFilter: TemplateRef<any>;
  @ViewChild("programFilter", { static: true }) programFilter: TemplateRef<any>;
  @ViewChild("statusFilter", { static: true }) statusFilter: TemplateRef<any>;
  @ViewChild("deviceFilter", { static: true }) deviceFilter: TemplateRef<any>;
  @ViewChild("consentFilter", { static: true }) consentFilter: TemplateRef<any>;

  columns: ColumnConfig[] = [];
  rowData: any = [];
  totalRecords: number = 0;
  loading: boolean = false;

  practicesOptions: IKeyValue[];
  programOptions: IKeyValue[];
  statusOptions: IKeyValue[];
  deviceOptions: IKeyValue[];
  consentOptions: IKeyValue[];

  constructor(
    private dashboardService: DashboardService,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    forkJoin({
      clinics: this.dashboardService.getClinics(),
      programTypes: this.dashboardService.getProgramTypes(),
      statuses: this.dashboardService.getStatuses(),
      deviceTypes: this.dashboardService.getDeviceTypes(),
      consentTypes: this.dashboardService.getConsentTypes(),
    }).subscribe(({ clinics, programTypes, statuses, deviceTypes, consentTypes }) => {
      this.practicesOptions = clinics.data;
      this.programOptions = programTypes.data;
      this.statusOptions = statuses.data;
      this.deviceOptions = deviceTypes.data;
      this.consentOptions = consentTypes.data;
    });

    this.columns = [
      {
        name: "Patient Name",
        field: "name",
        filterType: "text",
        isCustom: true,
        template: this.patientCardTemplate,
        isFrozen: true,
        sort: true,
      },
      {
        name: "Practice",
        field: "practiceName",
        filterType: "custom",
        filterTemplate: this.practiceNameFilter,
        sort: true,
      },
      { name: "Device Type", field: "deviceType", filterType: "custom", filterTemplate: this.deviceFilter },
      {
        name: "Program Type",
        field: "programType",
        filterType: "custom",
        filterTemplate: this.programFilter,
        isCustom: true,
        template: this.programTypeTemplate,
      },
      {
        name: "Date",
        field: "date",
        filterType: "date",
        valueFormatter: this.formatToUSDate,
        sort: true,
      },
      {
        name: "Status",
        field: "status",
        filterType: "custom",
        filterTemplate: this.statusFilter,
        isCustom: true,
        template: this.statusTemplate,
      },
      {
        name: "Progress",
        sort: true,
        field: "progress",
        isCustom: true,
        template: this.progressTemplate,
      },
      {
        name: "Consent",
        field: "consent",
        filterType: "custom",
        filterTemplate: this.consentFilter,
        isCustom: true,
        template: this.consentTemplate,
      },
    ];
  }

  formatToUSDate(date: string) {
    return formatDate(date, "MM/dd/YYYY", "en-US");
  }

  onLazyLoad(event: LazyLoadEvent) {
    if (this.rowData.length == 0) this.loading = true;
    this.dashboardService.getDashboardData(event).subscribe(({ data, total }) => {
      this.loading = false;
      this.rowData = data;
      this.totalRecords = total;
      this.cdRef.markForCheck();
    });
  }
}
