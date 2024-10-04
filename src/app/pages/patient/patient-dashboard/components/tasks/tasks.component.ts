import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [DividerModule],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.scss",
})
export class TasksComponent {}
