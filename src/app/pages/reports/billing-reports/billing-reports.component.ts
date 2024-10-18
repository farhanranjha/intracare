import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-billing-reports",
  standalone: true,
  imports: [TabRouterComponent, RouterOutlet],
  templateUrl: "./billing-reports.component.html",
  styleUrl: "./billing-reports.component.scss",
})
export class BillingReportsComponent {
  routes: IKeyValue[] = [
    { label: "Medicare", value: "medicare" },
    { label: "Medicaid", value: "medicaid" },
  ];
}
