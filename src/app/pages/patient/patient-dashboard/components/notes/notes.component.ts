import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: "patient-dashboard-notes",
  standalone: true,
  imports: [DividerModule, TasksComponent],
  templateUrl: "./notes.component.html",
  styleUrl: "./notes.component.scss",
})
export class NotesComponent {}
