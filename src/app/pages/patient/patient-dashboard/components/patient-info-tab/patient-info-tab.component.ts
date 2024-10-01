import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";

@Component({
  selector: "patient-dashboard-info",
  standalone: true,
  imports: [ProgressBarModule, ButtonModule],
  templateUrl: "./patient-info-tab.component.html",
  styleUrl: "./patient-info-tab.component.scss",
})
export class PatientInfoTabComponent {}
