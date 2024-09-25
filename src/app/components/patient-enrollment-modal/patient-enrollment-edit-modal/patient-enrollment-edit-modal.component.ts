import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "app-patient-enrollment-edit-modal",
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: "./patient-enrollment-edit-modal.component.html",
})
export class PatientEnrollmentEditModalComponent {
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
