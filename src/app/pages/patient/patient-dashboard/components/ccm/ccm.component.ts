import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-ccm",
  standalone: true,
  imports: [RouterModule, TabRouterComponent],
  templateUrl: "./ccm.component.html",
  styleUrl: "./ccm.component.scss",
})
export class CCMComponent {
  routes: IKeyValue[] = [
    { label: "Biometrics", value: "biometrics" },
    { label: "Alerts", value: "alerts" },
    { label: "Vitals", value: "vitals" },
    { label: "CCM Screenings", value: "screenings" },
    { label: "CCM Careplans", value: "careplans" },
    { label: "Tasks", value: "tasks" },
    { label: "Notes", value: "notes" },
    { label: "Logs", value: "logs" },
    { label: "Report", value: "report" },
  ];
}
