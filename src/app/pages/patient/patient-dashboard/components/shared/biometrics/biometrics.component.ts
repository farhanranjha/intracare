import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-biometrics",
  standalone: true,
  imports: [],
  templateUrl: "./biometrics.component.html",
  styleUrl: "./biometrics.component.scss",
})
export class BiometricsComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
