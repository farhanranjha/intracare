import { NgModule } from "@angular/core";
import { TableComponent } from "../../components/table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "../../components/table/custom-filter/custom-filter.component";
import { PatientNotesComponent } from "src/app/components/Notes/patient-notes/patient-notes.component";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";
import { CommonModule } from "@angular/common";
import { ProgressBarModule } from "primeng/progressbar";

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    TableComponent,
    ButtonModule,
    CustomFilterComponent,
    PatientNotesComponent,
    ProgressBarModule,
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
