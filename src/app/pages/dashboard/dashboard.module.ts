import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ChartModule } from "primeng/chart";
import { DashboardChartComponent } from "./components/dashboard-chart/dashboard-chart.component";
import { DashboardCardsComponent } from "./components/dashboard-cards/dashboard-cards.component";
import { DashboardTableComponent } from "./components/dashboard-table/dashboard-table.component";
import { TableComponent } from "src/app/components/table/table.component";
import { CustomFilterComponent } from "src/app/components/table/custom-filter/custom-filter.component";

@NgModule({
  imports: [CommonModule, DashboardsRoutingModule, ChartModule, TableComponent, CustomFilterComponent],
  declarations: [DashboardComponent, DashboardChartComponent, DashboardCardsComponent, DashboardTableComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
