import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-patient-hold-modal",
  standalone: true,
  imports: [DialogModule, DividerModule, ButtonModule],
  templateUrl: "./patient-hold-modal.component.html",
  styleUrls: ["./patient-hold-modal.component.scss"],
})
export class PatientHoldModalComponent {
  @Input() showModal: boolean = false;
  @Input() headerText: string = "";
  @Input() contentText: string = "";

  @Output() yesCallback = new EventEmitter<void>();
  @Output() noCallback = new EventEmitter<void>();
  @Output() onCloseback = new EventEmitter<void>();

  onNoClick() {
    this.noCallback.emit();
  }

  onYesClick() {
    this.yesCallback.emit();
  }

  onDialogClose() {
    this.onCloseback.emit();
  }
}
