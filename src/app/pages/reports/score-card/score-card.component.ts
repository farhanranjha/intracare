import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TabRouterComponent } from "src/app/components/tab-router/tab-router.component";
import { IKeyValue } from "src/app/types/common-types";

@Component({
  selector: "app-score-card",
  standalone: true,
  imports: [TabRouterComponent, RouterOutlet],
  templateUrl: "./score-card.component.html",
  styleUrl: "./score-card.component.scss",
})
export class ScoreCardComponent {
  routes: IKeyValue[] = [
    { label: "Performance", value: "performance" },
    { label: "Referrals", value: "referrals" },
    { label: "Provider", value: "provider" },
  ];
}
