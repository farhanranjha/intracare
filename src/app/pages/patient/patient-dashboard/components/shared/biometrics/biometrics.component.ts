import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { IKeyValue } from "src/app/types/common-types";
import { BiometricDataComponent } from "./components/biometric-data/biometric-data.component";
import { KeyInsightComponent } from "./components/key-insight/key-insight.component";

@Component({
  selector: "app-biometrics",
  standalone: true,
  imports: [SidebarRouterComponent, BiometricDataComponent, KeyInsightComponent, CommonModule],
  templateUrl: "./biometrics.component.html",
  styleUrl: "./biometrics.component.scss",
})
export class BiometricsComponent implements OnInit {
  source: string;
  routes: IKeyValue[] = [
    { label: "Biometrics Data", value: "biometric-data" },
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
  }
}
