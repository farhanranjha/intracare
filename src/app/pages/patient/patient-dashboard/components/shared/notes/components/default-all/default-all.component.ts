import { Component, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { deafaultAllNotesMockData } from "src/app/utils/constants/mock-data";
import { DetailSidebarComponent } from "../../../../detail-sidebar/detail-sidebar.component";

@Component({
  selector: "default-all",
  standalone: true,
  imports: [TableComponent, ButtonModule, DetailSidebarComponent, CommonModule, FormsModule],
  templateUrl: "./default-all.component.html",
})
export class DefaultAllComponent {
  defaultNotes: any[] = deafaultAllNotesMockData;
  displayModal: boolean = false;
  selectedNote: any = null;

  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];

  ngOnInit() {
    this.columns = [
      {
        name: "Date & Time",
        field: "date",
        filterType: "",
      },
      {
        name: "Taken By",
        field: "takenBy",
        filterType: "",
      },
      {
        name: "Description",
        field: "description",
        filterType: "",
      },

      { name: "Actions", field: "actions", isCustom: true, template: this.actionTemplate, filterType: "none" },
    ];
  }
  showNote(data: any) {
    this.selectedNote = data;
    this.displayModal = true;
  }
}
