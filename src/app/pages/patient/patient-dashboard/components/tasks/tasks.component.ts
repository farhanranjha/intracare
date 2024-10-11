import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { TaskSidebarComponent } from "../task-sidebar/task-sidebar.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [DividerModule, TaskSidebarComponent, ButtonModule],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.scss",
})
export class TasksComponent {
  constructor(private router: Router) {}
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

  gotToNotesSection() {
    // this.router.navigate(["/patient/1/rpm/notes"]);
    this.router.navigateByUrl("/patient/1/rpm/notes");
  }

  openTaskSidebar() {
    this.taskBarVisible = true;
  }

  onTaskSidebarClose(value: boolean) {
    this.taskBarVisible = value;
  }
}
