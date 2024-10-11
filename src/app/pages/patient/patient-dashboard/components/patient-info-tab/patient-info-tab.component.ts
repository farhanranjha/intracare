import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { NotesComponent } from "../notes/notes.component";
import { DividerModule } from "primeng/divider";
import { FileUploadModule } from "primeng/fileupload";
import { PatientDischargeModalComponent } from "../patient-discharge-modal/patient-discharge-modal.component";
import { PatientHoldModalComponent } from "../patient-hold-modal/patient-hold-modal.component";
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

    PatientHoldModalComponent,
    PatientDischargeModalComponent,
    MessagesSidebarComponent,
  ],
  templateUrl: "./patient-info-tab.component.html",
  styleUrl: "./patient-info-tab.component.scss",
})
export class PatientInfoTabComponent {
  messageBarVisible: boolean = false;

  showDischargeModal: boolean = false;
  showHoldModal: boolean = false;
  msgBarVisible: boolean = false;

  openDischargeModal() {
    this.showDischargeModal = true;
  }

  onDischargeClose() {
    this.showDischargeModal = false;
  }

  onClose() {
    this.showHoldModal = false;
  }

  openHoldModal() {
    this.showHoldModal = true;
  }

  closeHoldModal() {
    this.showHoldModal = false;
  }

  updateStatus() {
    this.showHoldModal = false;
  }
  openMessageSidebar() {
    this.messageBarVisible = true;
  }

  onMessageSidebarClose(value: boolean) {
    this.messageBarVisible = value;
  }
}
