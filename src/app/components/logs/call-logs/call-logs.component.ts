import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";

@Component({
  selector: "app-call-logs",
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule],
  templateUrl: "./call-logs.component.html",
})
export class CallLogsComponent {
  @Input() callLogs: any[] = [];

  columns: any[] = [
    { field: "dateTime", header: "Date & Time" },
    { field: "callFrom", header: "Call From" },
    { field: "callTo", header: "Call To" },
    { field: "phoneNumber", header: "Phone Number" },
    { field: "startTime", header: "Start Time" },
    { field: "endTime", header: "End Time" },
    { field: "duration", header: "Duration (mm:ss)" },
    { field: "status", header: "Status" },
  ];
}
