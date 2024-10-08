import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";
import { CustomFilterComponent } from "../../components/table/custom-filter/custom-filter.component";
import { TableComponent } from "../../components/table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    TableComponent,
    ButtonModule,
    CustomFilterComponent,
    ProgressBarModule,
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
