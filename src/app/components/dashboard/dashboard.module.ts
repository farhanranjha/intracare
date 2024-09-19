import { NgModule } from "@angular/core";
import { TableComponent } from "../table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [DashboardsRoutingModule, TableComponent, ButtonModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
