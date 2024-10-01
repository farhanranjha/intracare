import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PatientDashboardComponent } from "./patient-dashboard.component";
import { GeneralSettingsComponent } from "./components/general-settings/general-settings.component";
import { RPMComponent } from "./components/rpm/rpm.component";
import { CCMComponent } from "./components/ccm/ccm.component";
import { ProfileComponent } from "./components/general-settings/components/profile/profile.component";
import { DevicesComponent } from "./components/general-settings/components/devices/devices.component";
import { CustomVitalAlertsComponent } from "./components/general-settings/components/custom-vital-alerts/custom-vital-alerts.component";
import { BiometricsComponent } from "./components/rpm/components/biometrics/biometrics.component";
import { VitalsComponent } from "./components/rpm/components/vitals/vitals.component";
import { AlertsComponent } from "./components/rpm/components/alerts/alerts.component";
import { TasksComponent } from "./components/rpm/components/tasks/tasks.component";
import { NotesComponent } from "./components/notes/notes.component";
import { LogsComponent } from "./components/rpm/components/logs/logs.component";
import { ReportsComponent } from "./components/rpm/components/reports/reports.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: PatientDashboardComponent,
        children: [
          {
            path: "general-settings",
            component: GeneralSettingsComponent,
            children: [
              { path: "profile", component: ProfileComponent },
              { path: "devices", component: DevicesComponent },
              { path: "custom-vital-alerts", component: CustomVitalAlertsComponent },
            ],
          },
          {
            path: "rpm",
            component: RPMComponent,
            children: [
              { path: "biometrics", component: BiometricsComponent },
              { path: "alerts", component: AlertsComponent },
              { path: "vitals", component: VitalsComponent },
              { path: "tasks", component: TasksComponent },
              { path: "notes", component: NotesComponent },
              { path: "logs", component: LogsComponent },
              { path: "reports", component: ReportsComponent },
            ],
          },
          { path: "ccm", component: CCMComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PatientDashboardRoutingModule {}
