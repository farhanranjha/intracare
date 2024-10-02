import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SidebarRouterComponent } from "src/app/components/sidebar-router/sidebar-router.component";
import { IKeyValue } from "src/app/types/common-types";
import { CallLogsComponent } from "./components/call-logs/call-logs.component";
import { TimerLogsComponent } from "./components/timer-logs/timer-logs.component";
import { TextLogsComponent } from "./components/text-logs/text-logs.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-logs",
  standalone: true,
  imports: [SidebarRouterComponent, CallLogsComponent, TimerLogsComponent, TextLogsComponent, CommonModule],
  templateUrl: "./logs.component.html",
  styleUrl: "./logs.component.scss",
})
export class LogsComponent implements OnInit {
  source: string;
  routes: IKeyValue[] = [
    { label: "Call Logs", value: "call-logs" },
    { label: "Text Logs", value: "text-logs" },
    { label: "Timer Logs", value: "timer-logs" },
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
