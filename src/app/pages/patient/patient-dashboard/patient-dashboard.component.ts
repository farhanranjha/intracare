import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, RouterModule, ActivatedRoute } from "@angular/router";
import { filter } from "rxjs";
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
  ],
  templateUrl: "./patient-dashboard.component.html",
  styleUrl: "./patient-dashboard.component.scss",
})
export class PatientDashboardComponent implements OnInit {
  routes: { label: string; value: string }[] = [
    { label: "General Settings", value: "general-settings" },
    { label: "RPM", value: "rpm" },
    { label: "CCM", value: "ccm" },
  ];
  timer: any;
  timerDisplay = "00:00";
  isRunning = false;
  hasStarted = false;
  selectedMode: "rpm" | "ccm" | null = null;
  displayModal = false; //making it false for development purpose, it should be true
  logTimeModal = false;
  private pendingNavigation: string | null = null;
  private isNavigating = false;
  private patientId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get("id");
      console.log("Patient ID:", this.patientId);
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
      if (this.hasStarted && !this.isNavigating) {
        if (this.patientId && this.doesUrlMatchPatientRoute(event.url)) {
          this.isNavigating = false;
        } else {
          this.pendingNavigation = event.url;
          this.isNavigating = true;
          this.router.navigateByUrl(this.router.url);
          this.logTimeModal = true;
        }
      }
    });
  }
  doesUrlMatchPatientRoute(url: string): boolean {
    const patientRouteRegex = new RegExp(`/patient/${this.patientId}`);
    return patientRouteRegex.test(url);
  }

  selectMode(mode: "rpm" | "ccm"): void {
    this.selectedMode = mode;
    this.displayModal = false;
    this.startTimer();
  }

  startTimer(): void {
    if (!this.selectedMode) {
      alert("Please select a mode first.");
      return;
    }

    this.isRunning = true;
    this.hasStarted = true;
    this.timer = setInterval(() => {
      this.updateTimerDisplay();
    }, 1000);
  }

  pauseTimer(): void {
    this.isRunning = false;
    clearInterval(this.timer);
  }

  stopTimer(): void {
    this.logTimeModal = true;
  }

  resumeTimer(): void {
    this.isRunning = true;
    this.timer = setInterval(() => {
      this.updateTimerDisplay();
    }, 1000);
  }

  updateTimerDisplay(): void {
    const currentTime = this.parseTime(this.timerDisplay);
    const newTime = currentTime + 1;
    this.timerDisplay = this.formatTime(newTime);
  }

  parseTime(timeString: string): number {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
  }

  formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  handleLogTimeChoice(logTime: boolean): void {
    if (logTime) {
      this.navigateAfterLogging();
    } else {
      this.navigateAfterLogging();
    }
  }

  navigateAfterLogging(): void {
    if (this.pendingNavigation) {
      console.log(this.pendingNavigation);

      this.router.navigate([this.pendingNavigation]);
      this.pendingNavigation = null;
    } else {
      this.logTimeModal = false;
      this.timerDisplay = "00:00";
      this.isRunning = false;
      this.hasStarted = false;
      clearInterval(this.timer);
    }
    this.logTimeModal = false;
  }
}
