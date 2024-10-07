import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { PatientDataComponent } from "./components/patient-data/patient-data.component";
import { KeyInsightComponent } from "./components/key-insight/key-insight.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-biometrics",
  standalone: true,
  imports: [SidebarRouterComponent, PatientDataComponent, KeyInsightComponent, CommonModule],
  templateUrl: "./biometrics.component.html",
  styleUrls: ["./biometrics.component.scss"],
})
export class BiometricsComponent implements OnInit {
  source: string;
  routes: IKeyValue[] = [
    { label: "Patient Data", value: "patient-data" },
    { label: "Key Insights", value: "key-insight" },
  ];
  activeTab: IKeyValue = this.routes[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }

  onTabChange(tab: IKeyValue) {
    this.activeTab = tab;
    console.log("Active Tab:", this.activeTab);
  }
}
