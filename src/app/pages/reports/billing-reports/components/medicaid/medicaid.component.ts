import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-medicaid",
  standalone: true,
  imports: [TabRouterComponent, RouterOutlet],
  templateUrl: "./medicaid.component.html",
  styleUrl: "./medicaid.component.scss",
})
export class MedicaidComponent {
  routes: IKeyValue[] = [{ label: "RPM Billing", value: "rpm-billing" }];
}
