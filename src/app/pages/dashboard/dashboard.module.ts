import { NgModule } from "@angular/core";
import { TableComponent } from "../../components/table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "../../components/table/custom-filter/custom-filter.component";
import { PatientNotesComponent } from "src/app/components/Notes/patient-notes/patient-notes.component";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";

@NgModule({
  imports: [DashboardsRoutingModule, TableComponent, ButtonModule, CustomFilterComponent, PatientNotesComponent],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
