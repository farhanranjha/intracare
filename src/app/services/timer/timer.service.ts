import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  private timer: any;
  private currentTimeInSeconds = 0;

  private _timerDisplay = new BehaviorSubject<string>("00:00");
  timerDisplay$ = this._timerDisplay.asObservable();

  private _isRunning = new BehaviorSubject<boolean>(false);
  isRunning$ = this._isRunning.asObservable();

  private _hasStarted = new BehaviorSubject<boolean>(false);
  hasStarted$ = this._hasStarted.asObservable();

  private _selectedMode = new BehaviorSubject<"rpm" | "ccm" | null>(null);
  selectedMode$ = this._selectedMode.asObservable();

  private _logTimeModal = new BehaviorSubject<boolean>(false);
  logTimeModal$ = this._logTimeModal.asObservable();

  selectMode(mode: "rpm" | "ccm"): void {
    this._selectedMode.next(mode);
    this.startTimer(); // Start the timer when a mode is selected
  }

  startTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this._isRunning.next(true);
    this._hasStarted.next(true);
    this.timer = setInterval(() => {
      this.currentTimeInSeconds++;
      this.updateTimerDisplay();
    }, 1000);
  }

  pauseTimer(): void {
    this._isRunning.next(false);
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  stopTimer(): void {
    this._isRunning.next(false);
    this._hasStarted.next(false);
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.currentTimeInSeconds = 0;
    this.updateTimerDisplay();
  }

  resumeTimer(): void {
    if (!this._isRunning.value) {
      this._isRunning.next(true);
      this.timer = setInterval(() => {
        this.currentTimeInSeconds++;
        this.updateTimerDisplay();
      }, 1000);
    }
  }

  private updateTimerDisplay(): void {
    const minutes = Math.floor(this.currentTimeInSeconds / 60);
    const seconds = this.currentTimeInSeconds % 60;
    this._timerDisplay.next(`${this.padZero(minutes)}:${this.padZero(seconds)}`);
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  closeLogTimeModal(): void {
    this._logTimeModal.next(false);
  }

  openLogTimeModal(): void {
    this._logTimeModal.next(true);
  }
}
