import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [DashboardsRoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
