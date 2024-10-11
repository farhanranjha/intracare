import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { NotesSidebarComponent } from "../notes-sidebar/notes-sidebar.component";
import { TasksComponent } from "../tasks/tasks.component";
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router } from "@angular/router";
import { TimerService } from "src/app/services/timer/timer.service";
import { SidebarService } from "src/app/services/sidebar/sidebar.service";

@Component({
  selector: "patient-dashboard-notes",
  standalone: true,
  imports: [DividerModule, TasksComponent, NotesSidebarComponent, ButtonModule],
  templateUrl: "./notes.component.html",
  styleUrl: "./notes.component.scss",
})
export class NotesComponent {
  isExpanded: boolean = false;
  selectedMode: "rpm" | "ccm" | null = null;
  patientId: string | null = null;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private timerService: TimerService,
    private route: ActivatedRoute,
  ) {}

  viewAllNotes() {
    this.sidebarService.setSidebarVisible(true);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.patientId = params.get("id");
    });
    this.timerService.selectedMode$.subscribe((mode) => {
      this.selectedMode = mode;
    });
  }
  goToNotesSection() {
    this.router.navigateByUrl(`/patient/${this.patientId}/${this.selectedMode}/notes`);
  }
  noteContent: string =
    "Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet.Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet Lorem ipsum dolor sit , consectetur Duis sollicitudin sollicitudin laoreet pulvinar sollicitudin laoreet hah eet";

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  getTruncatedText(text: string): string {
    return this.isExpanded ? text : text.slice(0, 100) + "...";
  }
}
