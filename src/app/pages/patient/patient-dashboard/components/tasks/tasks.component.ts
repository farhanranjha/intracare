import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { TaskSidebarComponent } from "../task-sidebar/task-sidebar.component";
import { TimerService } from "src/app/services/timer/timer.service";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [DividerModule, TaskSidebarComponent, ButtonModule],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.scss",
})
export class TasksComponent {
  selectedMode: "rpm" | "ccm" | null = null;
  patientId: string | null = null;

  constructor(
    private router: Router,
    private timerService: TimerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get("id");
    });
    this.timerService.selectedMode$.subscribe((mode) => {
      this.selectedMode = mode;
    });
  }

  goToTasksSection() {
    this.router.navigateByUrl(`/patient/${this.patientId}/${this.selectedMode}/tasks`);
  }
  isExpanded: boolean = false;
  noteContent: string =
    "Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet";

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  getTruncatedText(text: string): string {
    return this.isExpanded ? text : text.slice(0, 100) + "...";
  }
  taskBarVisible: boolean = false;

  openTaskSidebar() {
    this.taskBarVisible = true;
  }

  onTaskSidebarClose(value: boolean) {
    this.taskBarVisible = value;
  }
}
