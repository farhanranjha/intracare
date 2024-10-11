import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { SidebarService } from "src/app/services/sidebar/sidebar.service";
import { NotesSidebarComponent } from "../notes-sidebar/notes-sidebar.component";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: "patient-dashboard-notes",
  standalone: true,
  imports: [DividerModule, TasksComponent, NotesSidebarComponent],
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent {
  isExpanded: boolean = false;
  noteContent: string =
    "Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet";

  constructor(private sidebarService: SidebarService) {}

  viewAllNotes() {
    this.sidebarService.setSidebarVisible(true);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  getTruncatedText(text: string): string {
    return this.isExpanded ? text : text.slice(0, 100) + "...";
  }
}
