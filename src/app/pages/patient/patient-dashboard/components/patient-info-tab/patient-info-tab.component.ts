import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { NotesComponent } from "../notes/notes.component";
import { DividerModule } from "primeng/divider";
import { TaskSidebarComponent } from "../task-sidebar/task-sidebar.component";
import { FileUploadModule } from "primeng/fileupload";
import { MessagesSidebarComponent } from "../messages-sidebar/messages-sidebar.component";

@Component({
  selector: "patient-dashboard-info",
  standalone: true,
  imports: [
    ProgressBarModule,
    FileUploadModule,
    ButtonModule,
    NotesComponent,
    DividerModule,
    TaskSidebarComponent,
    MessagesSidebarComponent,
  ],
  templateUrl: "./patient-info-tab.component.html",
  styleUrl: "./patient-info-tab.component.scss",
})
export class PatientInfoTabComponent {
  taskBarVisible: boolean = false;
  msgBarVisible: boolean = false;
}
