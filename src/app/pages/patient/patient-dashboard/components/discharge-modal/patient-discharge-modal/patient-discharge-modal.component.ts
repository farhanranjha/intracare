import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-patient-discharge-modal",
  standalone: true,
  imports: [DialogModule, DividerModule, ButtonModule, FormsModule],
  templateUrl: "./patient-discharge-modal.component.html",
  styleUrl: "./patient-discharge-modal.component.scss",
})
export class PatientDischargeModalComponent {
  @Input() showModal: boolean = false;

  value: string = "State the reason of discharge";

  openModal() {
    this.showModal = true;
  }
  discharge() {
    this.showModal = false;
  }
  cancel() {
    this.showModal = false;
  }
}
