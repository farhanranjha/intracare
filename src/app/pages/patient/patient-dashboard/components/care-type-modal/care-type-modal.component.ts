import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { TimerService } from "src/app/services/timer/timer.service";

@Component({
  selector: "care-type-modal",
  standalone: true,
  imports: [DialogModule, DividerModule, ButtonModule],
  templateUrl: "./care-type-modal.component.html",
  styleUrl: "./care-type-modal.component.scss",
})
export class CareTypeModalComponent {
  displayModal = true; //true for prod
  selectedMode: "rpm" | "ccm" | null = null;

  constructor(private timerService: TimerService) {}

  selectMode(mode: "rpm" | "ccm"): void {
    this.timerService.selectMode(mode);
    this.displayModal = false;
  }
}
