import { Component, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { ProgressBarModule } from "primeng/progressbar";
import { TabViewModule } from "primeng/tabview";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { TableComponent } from "src/app/components/table/table.component";
import { HeaderComponent } from "./components/header/header.component";
import { PatientInfoTabComponent } from "./components/patient-info-tab/patient-info-tab.component";
import { DialogModule } from "primeng/dialog";
import { CareTypeModalComponent } from "./components/shared/caretype/care-type-modal/care-type-modal.component";
import { TimerLogComponent } from "./components/shared/timer/timer-log/timer-log.component";
import { TimerService } from "src/app/services/timer/timer.service";

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DividerModule,
    ProgressBarModule,
    TabViewModule,
    TableComponent,
    RouterModule,
    HeaderComponent,
    PatientInfoTabComponent,
    TabRouterComponent,
    DialogModule,
    CareTypeModalComponent,
    TimerLogComponent,
  ],
  templateUrl: "./patient-dashboard.component.html",
  styleUrl: "./patient-dashboard.component.scss",
})
export class PatientDashboardComponent {
  @ViewChild(TimerLogComponent) timerLog!: TimerLogComponent;
  routes: { label: string; value: string }[] = [
    { label: "General Settings", value: "general-settings" },
    { label: "RPM", value: "rpm" },
    { label: "CCM", value: "ccm" },
  ];

  isRunning = false;
  hasStarted = false;
  timerDisplay = "00:00";
  logTimeModal = false;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.timerDisplay$.subscribe((display) => {
      this.timerDisplay = display;
    });

    this.timerService.isRunning$.subscribe((isRunning) => {
      this.isRunning = isRunning;
    });

    this.timerService.hasStarted$.subscribe((hasStarted) => {
      this.hasStarted = hasStarted;
    });
    this.timerService.logTimeModal$.subscribe((isVisible) => {
      this.logTimeModal = isVisible;
    });
  }

  startTimer(): void {
    this.timerService.startTimer();
  }

  pauseTimer(): void {
    this.timerService.pauseTimer();
  }

  stopTimer(): void {
    console.log("Stop button clicked");
    this.timerLog.handleStopButton();
  }

  resumeTimer(): void {
    this.timerService.resumeTimer();
  }
}
