import { Injectable } from "@angular/core";
import { BehaviorSubject, fromEvent } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PatientDashboardTableHeightService {
  private scrollHeightSubject = new BehaviorSubject<string>("400px");
  scrollHeight$ = this.scrollHeightSubject.asObservable();

  constructor() {
    this.adjustTableHeight();
    fromEvent(window, "resize").subscribe(() => this.adjustTableHeight());
  }

  adjustTableHeight(): void {

    const layout = document.getElementById("layout");
    if (layout) {
      const layoutHeight = layout.offsetHeight;
      const headerHeight = 35;
      const paginatorHeight = 47
      const availableHeight = layoutHeight - headerHeight - paginatorHeight - 25;
      this.scrollHeightSubject.next(`${availableHeight}px`);
    }
  }
}
