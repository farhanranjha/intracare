import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-care-management",
  standalone: true,
  imports: [TabRouterComponent, RouterOutlet],
  templateUrl: "./care-management.component.html",
  styleUrl: "./care-management.component.scss",
})
export class CareManagementComponent {
  routes: IKeyValue[] = [{ label: "RPM Readings", value: "readings-compliance" }];
}
