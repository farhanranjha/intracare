import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { readingNotesMockData } from "src/app/utils/constants/mock-data";
import { DetailSidebarComponent } from "../../../../detail-sidebar/detail-sidebar.component";

@Component({
  selector: "reading-notes",
  standalone: true,
  imports: [TableComponent, ButtonModule, CommonModule, FormsModule, DetailSidebarComponent],
  templateUrl: "./reading-notes.component.html",
})
export class ReadingNotesComponent {
  readingNotes: any[] = readingNotesMockData;
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
