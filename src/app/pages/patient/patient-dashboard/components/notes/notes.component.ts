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
  styleUrl: "./notes.component.scss",
})
export class NotesComponent {
  constructor(private sidebarService: SidebarService) {}

  viewAllNotes() {
    this.sidebarService.setSidebarVisible(true);
  }
}
