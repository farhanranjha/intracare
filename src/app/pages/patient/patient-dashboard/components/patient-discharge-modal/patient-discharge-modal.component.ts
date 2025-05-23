import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "patient-discharge-modal",
  standalone: true,
  imports: [DialogModule, DividerModule, ButtonModule, FormsModule],
  templateUrl: "./patient-discharge-modal.component.html",
  styleUrl: "./patient-discharge-modal.component.scss",
})
export class PatientDischargeModalComponent {
  @Input() showModal: boolean = false;

  @Output() onCloseDischargeback = new EventEmitter<void>();

  onDischargeClose() {
    this.onCloseDischargeback.emit();
    this.showModal = true;
  }

  onDischarge() {
    this.showModal = false;
  }

  onCancel() {
    this.showModal = false;
  }
}
