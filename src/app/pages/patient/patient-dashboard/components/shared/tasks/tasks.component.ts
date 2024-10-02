import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.scss",
})
export class TasksComponent implements OnInit {
  source: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.source = data["source"];
    });
  }
}
