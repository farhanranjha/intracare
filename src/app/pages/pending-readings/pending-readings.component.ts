import { Component, OnInit, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Table } from "primeng/table";
import { pendingReadingsRows } from "src/app/utils/constants/mock-data";
import { ColumnConfig, TableComponent } from "../../components/table/table.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-pending-readings",
  standalone: true,
  imports: [ButtonModule, TableComponent, RouterModule],
  templateUrl: "./pending-readings.component.html",
  styleUrl: "./pending-readings.component.scss",
})
export class PendingReadingsComponent implements OnInit {
  @ViewChild("dt1") dt1!: Table;
  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("programTypeTemplate", { static: true }) programTypeTemplate: any;
  @ViewChild("trackingTemplate", { static: true }) trackingTemplate: any;
  @ViewChild("shippingTemplate", { static: true }) shippingTemplate: any;

  columns: ColumnConfig[] = [];
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

  clear(table: any) {
    table.clear();
  }
}
