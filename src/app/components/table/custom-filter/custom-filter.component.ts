import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-custom-filter",
  standalone: true,
  imports: [CheckboxModule, CommonModule],
  templateUrl: "./custom-filter.component.html",
})
export class CustomFilterComponent {
  @Input() options: string[] = [];
  @Output() filterCallback: EventEmitter<string[]> = new EventEmitter<string[]>();

  selectedOptions: string[] = [];
  onCheckboxChange(option: string, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      }
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
    this.filterCallback.emit(this.selectedOptions);
  }
}
