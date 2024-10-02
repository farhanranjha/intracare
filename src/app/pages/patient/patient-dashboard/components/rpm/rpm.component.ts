import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-rpm",
  standalone: true,
  imports: [RouterModule, TabRouterComponent],
  templateUrl: "./rpm.component.html",
  styleUrl: "./rpm.component.scss",
})
export class RPMComponent {
  routes: IKeyValue[] = [
    { label: "Biometrics", value: "biometrics" },
    { label: "Alerts", value: "alerts" },
    { label: "Vitals", value: "vitals" },
    { label: "Tasks", value: "tasks" },
    { label: "Notes", value: "notes" },
    { label: "Logs", value: "logs" },
    { label: "Report", value: "report" },
  ];
}
