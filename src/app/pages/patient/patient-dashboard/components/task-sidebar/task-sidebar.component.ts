import { Component, Input } from "@angular/core";
import { SidebarModule } from "primeng/sidebar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "task-sidebar",
  standalone: true,
  imports: [SidebarModule, InputTextareaModule, DropdownModule, CalendarModule, CheckboxModule, ButtonModule],
  templateUrl: "./task-sidebar.component.html",
  styleUrl: "./task-sidebar.component.scss",
})
export class TaskSidebarComponent {
  @Input() sidebarVisible: boolean = false;
}
