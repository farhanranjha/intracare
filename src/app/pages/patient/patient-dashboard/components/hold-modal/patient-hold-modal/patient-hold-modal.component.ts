import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
@Component({
  selector: "app-patient-hold-modal",
  standalone: true,
  imports: [DialogModule, DividerModule, ButtonModule],
  templateUrl: "./patient-hold-modal.component.html",
  styleUrl: "./patient-hold-modal.component.scss",
})
export class PatientHoldModalComponent {
  @Input() showModal: boolean = false; // Controls visibility
  @Input() headerText: string = ""; // The modal header text
  @Input() contentText: string = ""; // The dynamic content inside modal

  @Output() yesCallback = new EventEmitter<void>(); // Callback for Yes button
  @Output() noCallback = new EventEmitter<void>(); // Callback for No button

  // Triggers the No button callback
  onNoClick() {
    this.noCallback.emit();
    this.showModal = false; // Close the modal
  }

  // Triggers the Yes button callback
  onYesClick() {
    this.yesCallback.emit();
    this.showModal = false; // Close the modal
  }

  // This method handles the "X" button or the outside click close event
  onDialogClose() {
    this.showModal = false; // Ensure the modal closes properly
  }
}
