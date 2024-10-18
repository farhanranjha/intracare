import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-medicare",
  standalone: true,
  imports: [TabRouterComponent, RouterOutlet],
  templateUrl: "./medicare.component.html",
  styleUrl: "./medicare.component.scss",
})
export class MedicareComponent {
  routes: IKeyValue[] = [
    { label: "RPM Billing", value: "rpm-billing" },
    { label: "CCM Billing", value: "ccm-billing" },
  ];
}
