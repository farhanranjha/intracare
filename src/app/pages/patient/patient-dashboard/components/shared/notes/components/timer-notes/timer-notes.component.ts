import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TableComponent } from "src/app/components/table/table.component";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { NotesSidebarComponent } from "../notes-sidebar/notes-sidebar.component";
import { timerNotesMockData } from "src/app/utils/constants/mock-data";

@Component({
  selector: "timer-notes",
  standalone: true,
  imports: [TableComponent, ButtonModule, NotesSidebarComponent, CommonModule, FormsModule],
  templateUrl: "./timer-notes.component.html",
})
export class TimerNotesComponent {
  timerNotes: any[] = timerNotesMockData;
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
