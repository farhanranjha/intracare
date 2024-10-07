import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { TasksComponent } from "../tasks/tasks.component";
import { TaskSidebarComponent } from "../task-sidebar/task-sidebar.component";
import { PatientNotesComponent } from "src/app/components/Notes/patient-notes/patient-notes.component";
import { SidebarService } from "src/app/services/sidebar/sidebar.service";

@Component({
  selector: "patient-dashboard-notes",
  standalone: true,
  imports: [DividerModule, TasksComponent, PatientNotesComponent],
  templateUrl: "./notes.component.html",
  styleUrl: "./notes.component.scss",
})
export class NotesComponent {
  constructor(private sidebarService: SidebarService) {}

  viewAllNotes() {
    this.sidebarService.setSidebarVisible(true);
  }
}
