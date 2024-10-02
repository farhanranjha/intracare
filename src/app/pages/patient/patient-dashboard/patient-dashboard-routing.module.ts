import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CCMComponent } from "./components/ccm/ccm.component";
import { CareplansComponent } from "./components/ccm/components/careplans/careplans.component";
import { ScreeningsComponent } from "./components/ccm/components/screenings/screenings.component";
import { CustomVitalAlertsComponent } from "./components/general-settings/components/custom-vital-alerts/custom-vital-alerts.component";
import { DevicesComponent } from "./components/general-settings/components/devices/devices.component";
import { ProfileComponent } from "./components/general-settings/components/profile/profile.component";
import { GeneralSettingsComponent } from "./components/general-settings/general-settings.component";
import { RPMComponent } from "./components/rpm/rpm.component";
import { AlertsComponent } from "./components/shared/alerts/alerts.component";
import { BiometricsComponent } from "./components/shared/biometrics/biometrics.component";
import { LogsComponent } from "./components/shared/logs/logs.component";
import { NotesComponent } from "./components/shared/notes/notes.component";
import { ReportsComponent } from "./components/shared/reports/reports.component";
import { TasksComponent } from "./components/shared/tasks/tasks.component";
import { VitalsComponent } from "./components/shared/vitals/vitals.component";
import { PatientDashboardComponent } from "./patient-dashboard.component";

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
              { path: "biometrics", component: BiometricsComponent, data: { source: "rpm" } },
              { path: "alerts", component: AlertsComponent, data: { source: "rpm" } },
              { path: "vitals", component: VitalsComponent, data: { source: "rpm" } },
              { path: "tasks", component: TasksComponent, data: { source: "rpm" } },
              { path: "notes", component: NotesComponent, data: { source: "rpm" } },
              { path: "logs", component: LogsComponent, data: { source: "rpm" } },
              { path: "report", component: ReportsComponent, data: { source: "rpm" } },
            ],
          },
          {
            path: "ccm",
            component: CCMComponent,
            children: [
              { path: "biometrics", component: BiometricsComponent, data: { source: "ccm" } },
              { path: "alerts", component: AlertsComponent, data: { source: "ccm" } },
              { path: "vitals", component: VitalsComponent, data: { source: "ccm" } },
              { path: "tasks", component: TasksComponent, data: { source: "ccm" } },
              { path: "notes", component: NotesComponent, data: { source: "ccm" } },
              { path: "logs", component: LogsComponent, data: { source: "ccm" } },
              { path: "report", component: ReportsComponent, data: { source: "ccm" } },
              { path: "screenings", component: ScreeningsComponent },
              { path: "careplans", component: CareplansComponent },
            ],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PatientDashboardRoutingModule {}
