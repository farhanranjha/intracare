import { NgModule } from "@angular/core";
import { TableComponent } from "../../components/table/table.component";
import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ButtonModule } from "primeng/button";
import { CustomFilterComponent } from "../../components/table/custom-filter/custom-filter.component";

@NgModule({
  imports: [DashboardsRoutingModule, TableComponent, ButtonModule, CustomFilterComponent],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
