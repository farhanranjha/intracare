import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard/dashboard.service";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [CommonModule, DashboardsRoutingModule],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
