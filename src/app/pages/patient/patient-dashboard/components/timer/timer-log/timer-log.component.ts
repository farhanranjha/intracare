import { Component } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { filter } from "rxjs";
import { TimerService } from "src/app/services/timer/timer.service";

@Component({
  selector: "timer-log",
  standalone: true,
  imports: [DialogModule, DividerModule],
  templateUrl: "./timer-log.component.html",
  styleUrl: "./timer-log.component.scss",
})
export class TimerLogComponent {
  selectedMode: "rpm" | "ccm" | null = null;
  logTimeModal = false;
  private pendingNavigation: string | null = null;
  private isNavigating = false;
  private patientId: string | null = null;
  timerDisplay: string = "00:00";
  hasStarted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private timerService: TimerService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get("id");
    });

    this.timerService.selectedMode$.subscribe((mode) => {
      this.selectedMode = mode;
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

    this.timerService.timerDisplay$.subscribe((display) => {
      this.timerDisplay = display;
    });

    this.timerService.hasStarted$.subscribe((hasStarted) => {
      this.hasStarted = hasStarted;
    });
  }

  doesUrlMatchPatientRoute(url: string): boolean {
    const patientRouteRegex = new RegExp(`/patient/${this.patientId}`);
    return patientRouteRegex.test(url);
  }

  handleLogTimeChoice(logTime: boolean): void {
    this.timerService.stopTimer();
    if (logTime) {
      this.navigateAfterLogging();
    } else {
      this.navigateAfterLogging();
    }
  }

  onDialogClose() {
    this.logTimeModal = false;
    this.isNavigating = false;
  }

  navigateAfterLogging(): void {
    if (this.pendingNavigation) {
      this.router.navigate([this.pendingNavigation]);
      this.pendingNavigation = null;
    } else {
      this.logTimeModal = false;
      this.timerService.stopTimer();
    }
  }

  handleStopButton(): void {
    this.timerService.openLogTimeModal();
    this.logTimeModal = true;
    this.pendingNavigation = null;
  }
}
