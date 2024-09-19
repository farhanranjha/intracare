import { NgModule } from "@angular/core";
import { TableComponent } from "../table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [DashboardsRoutingModule, TableComponent],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
