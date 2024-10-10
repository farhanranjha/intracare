import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { alertsMockData } from "src/app/utils/constants/mock-data";
import { ButtonModule } from "primeng/button";
import { DetailSidebarComponent } from "../../detail-sidebar/detail-sidebar.component";

@Component({
  selector: "app-alerts",
  standalone: true,
  imports: [TableComponent, ButtonModule, DetailSidebarComponent, CommonModule, FormsModule],
  templateUrl: "./alerts.component.html",
  styleUrl: "./alerts.component.scss",
})
export class AlertsComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
    this.columns = [
      {
        name: "Alert DateTime",
        field: "date",
        filterType: "",
      },
      {
        name: "Reading Type",
        field: "readingType",
        filterType: "",
      },
      {
        name: "Alert Type",
        field: "alertType",
        filterType: "",
      },
      {
        name: "Reading DateTime",
        field: "readingDateTime",
        filterType: "",
      },
      {
        name: "Reading",
        field: "reading",
        filterType: "",
      },
      {
        name: "Stage",
        field: "stage",
        filterType: "",
      },
      { name: "Note", field: "actions", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
  }

  alertsMockData: any[] = alertsMockData;
  displayModal: boolean = false;
  selectedNote: any = null;

  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];

  showNote(data: any) {
    this.selectedNote = data;
    this.displayModal = true;
  }
}
