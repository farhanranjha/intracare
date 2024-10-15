import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "billing-report",
  standalone: true,
  imports: [DropdownModule, CalendarModule, FormsModule],
  templateUrl: "./billing-reports-filter.component.html",
})
export class BillingReportComponent {
  @Input() cptCodes: any[] = [];
  @Output() filterSelection = new EventEmitter<any>();

  dateRange: Date[];
  selectedCptCode: any;

  onSelectionChange() {
    this.filterSelection.emit({
      selectedDateRange: this.dateRange,
      selectedCptCode: this.selectedCptCode,
    });
  }

  constructor() {
    this.selectedCptCode = this.cptCodes[0];
  }
}
