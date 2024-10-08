import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { NotesComponent } from "../notes/notes.component";
import { DividerModule } from "primeng/divider";
import { TaskSidebarComponent } from "../task-sidebar/task-sidebar.component";
import { FileUploadModule } from "primeng/fileupload";
import { PatientDischargeModalComponent } from "../discharge-modal/patient-discharge-modal/patient-discharge-modal.component";
import { PatientHoldModalComponent } from "../hold-modal/patient-hold-modal/patient-hold-modal.component";

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
    PatientHoldModalComponent,
    PatientDischargeModalComponent,
  ],
  templateUrl: "./patient-info-tab.component.html",
  styleUrls: ["./patient-info-tab.component.scss"],
})
export class PatientInfoTabComponent {
  taskBarVisible: boolean = false;

  showDischargeModal: boolean = false; // Discharge modal flag
  showHoldModal: boolean = false; // Hold modal flag

  openDischargeModal() {
    this.showDischargeModal = true;
  }

  openHoldModal() {
    this.showHoldModal = true;
  }

  closeHoldModal() {
    this.showHoldModal = false;
  }

  updateStatus() {
    this.showHoldModal = false;
    console.log("Patient status updated!");
  }
}
