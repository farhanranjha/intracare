import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: "messages-sidebar",
  standalone: true,
  imports: [SidebarModule, InputTextareaModule, ButtonModule, DividerModule],
  templateUrl: "./messages-sidebar.component.html",
  styleUrl: "./messages-sidebar.component.scss",
})
export class MessagesSidebarComponent {
  @Input() sidebarVisible: boolean = false;
}
