import { Component } from "@angular/core";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [SidebarRouterComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  routes: IKeyValue[] = [
    { label: "Clinical Information", value: "biometrics" },
    { label: "Contact Information", value: "alerts" },
    { label: "Baseline Biometrics", value: "vitals" },
    { label: "Baseline Details", value: "tasks" },
    { label: "Notification Control", value: "notes" },
  ];

  activeTab: IKeyValue = this.routes[0];

  onTabChange(tab: IKeyValue) {
    this.activeTab = tab;
  }
}
