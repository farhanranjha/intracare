import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "app-patient-enrollment-update-modal",
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: "./patient-enrollment-update-modal.component.html",
})
export class PatientEnrollmentUpdateModalComponent {
  visible: boolean = false;

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  save() {
    this.visible = false;
  }
}
