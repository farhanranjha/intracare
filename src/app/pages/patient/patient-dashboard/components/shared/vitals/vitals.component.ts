import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-vitals",
  standalone: true,
  imports: [],
  templateUrl: "./vitals.component.html",
  styleUrl: "./vitals.component.scss",
})
export class VitalsComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
