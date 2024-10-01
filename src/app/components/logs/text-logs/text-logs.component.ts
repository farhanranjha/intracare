import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";

@Component({
  selector: "app-text-logs",
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule],
  templateUrl: "./text-logs.component.html",
})
export class TextLogsComponent {
  @Input() textLogs: any[] = [];

  columns: any[] = [
    { field: "dateTime", header: "Date & Time" },
    { field: "phoneNumber", header: "Phone Number" },
    { field: "message", header: "Message" },
    { field: "readingType", header: "Reading Type" },
    { field: "messageStatus", header: "Message Status" },
  ];
}
