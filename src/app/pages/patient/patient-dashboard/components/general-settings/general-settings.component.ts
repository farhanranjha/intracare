import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-general-settings",
  standalone: true,
  imports: [RouterModule, TabRouterComponent],
  templateUrl: "./general-settings.component.html",
  styleUrl: "./general-settings.component.scss",
})
export class GeneralSettingsComponent {
  routes: IKeyValue[] = [
    { label: "Profile", value: "profile" },
    { label: "Devices", value: "devices" },
    { label: "Custom Devices Alert", value: "custom-vital-alerts" },
  ];
}
