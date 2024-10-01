import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";

@Component({
  selector: "app-timer-logs",
  standalone: true,
  imports: [DialogModule, TableModule, CommonModule, FormsModule],
  templateUrl: "./timer-logs.component.html",
})
export class TimerLogsComponent {
  @Input() timerLogs: any[] = [];
  displayModal: boolean = false;
  selectedNote: any = null;

  columns: any[] = [
    { field: "dateTime", header: "Date & Time" },
    { field: "takenBy", header: "Taken By" },
    { field: "startTime", header: "Start Time" },
    { field: "endTime", header: "End Time" },
    { field: "duration", header: "Duration (mm:ss)" },
    { field: "billable", header: "Billable" },
    { field: "billingCategory", header: "Billing Category" },
    { field: "logType", header: "Log Type" },
  ];

  showNote(rowData: any) {
    this.selectedNote = rowData;
    this.displayModal = true;
  }
}
