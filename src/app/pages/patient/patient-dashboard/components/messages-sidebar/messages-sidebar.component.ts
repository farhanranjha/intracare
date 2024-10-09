import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: "messages-sidebar",
  standalone: true,
  imports: [SidebarModule, InputTextareaModule, ButtonModule, DividerModule, CommonModule, FormsModule],
  templateUrl: "./messages-sidebar.component.html",
  styleUrl: "./messages-sidebar.component.scss",
})
export class MessagesSidebarComponent {
  @Input() sidebarVisible: boolean = false;
  newMessage: string = "";

  mockMsgs = [
    {
      message: "Can you send me the final version of the document before the deadline tomorrow?",
      date: "11/12/2025",
    },
  ];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.mockMsgs.push({
        message: this.newMessage,
        date: new Date().toLocaleDateString(),
      });
      this.newMessage = "";
    }
  }
  onKeyDown(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
