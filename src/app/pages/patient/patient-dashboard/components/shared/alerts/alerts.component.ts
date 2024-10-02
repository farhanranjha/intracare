import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-alerts",
  standalone: true,
  imports: [],
  templateUrl: "./alerts.component.html",
  styleUrl: "./alerts.component.scss",
})
export class AlertsComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
