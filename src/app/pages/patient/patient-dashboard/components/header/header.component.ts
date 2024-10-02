import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "patient-dashboard-header",
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  activeTab: string = "RPM";
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
