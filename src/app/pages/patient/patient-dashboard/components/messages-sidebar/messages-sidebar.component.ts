import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: "messages-sidebar",
  standalone: true,
  imports: [SidebarModule, InputTextareaModule, ButtonModule, DividerModule, CommonModule],
  templateUrl: "./messages-sidebar.component.html",
  styleUrl: "./messages-sidebar.component.scss",
})
export class MessagesSidebarComponent {
  @Input() sidebarVisible: boolean = false;
  mockMsgs = [
    {
      message:
        "Let's meet for lunch tomorrow and discuss the project updates in detail. I received your email and will review the attached files by the end of the day. I received your email and will review the attached files by the end of the day.",
      date: "11/12/2025",
    },
    {
      message: "Can you send me the final version of the document before the deadline tomorrow?",
      date: "11/12/2025",
    },
    {
      message:
        "I received your email and will review the attached files by the end of the day. Can you send me the final version of the document before the deadline tomorrow?",
      date: "11/12/2025",
    },
  ];
}
