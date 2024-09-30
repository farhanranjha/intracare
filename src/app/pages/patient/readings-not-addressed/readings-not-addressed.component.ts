import { Component, OnInit, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Table } from "primeng/table";
import { readingNotAddressedRows } from "src/app/utils/constants/mock-data";
import { ColumnConfig, TableComponent } from "src/app/components/table/table.component";

@Component({
  selector: "app-readings-not-addressed",
  standalone: true,
  imports: [ButtonModule, TableComponent],
  templateUrl: "./readings-not-addressed.component.html",
  styleUrl: "./readings-not-addressed.component.scss",
})
export class ReadingsNotAddressedComponent implements OnInit {
  @ViewChild("dt1") dt1!: Table;

  @ViewChild("patientCardTemplate", { static: true }) patientCardTemplate: any;
  @ViewChild("stageTemplate", { static: true }) stageTemplate: any;
  @ViewChild("statusTemplate", { static: true }) statusTemplate: any;

  columns: ColumnConfig[] = [];
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

  clear(table: any) {
    table.clear();
  }
}
