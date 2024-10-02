import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-logs",
  standalone: true,
  imports: [],
  templateUrl: "./logs.component.html",
  styleUrl: "./logs.component.scss",
})
export class LogsComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
