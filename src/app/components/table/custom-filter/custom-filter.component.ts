import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-custom-filter",
  standalone: true,
  imports: [CheckboxModule, CommonModule, FormsModule],
  templateUrl: "./custom-filter.component.html",
})
export class CustomFilterComponent {
  @Input() options: { value: string; label: string; checked: boolean }[] = [];
  @Input() filterCallback: (selectedOptions: string[]) => void;

  selectedOptions: string[] = [];

  onCheckboxChange(optionValue: { value: string; label: string; checked: boolean }, isChecked: boolean): void {
    const option = this.options.find((opt) => opt.value === optionValue.value);
    if (option) {
      option.checked = isChecked;
    }
    if (isChecked) {
      if (!this.selectedOptions.includes(optionValue.value)) {
        this.selectedOptions.push(optionValue.value);
      }
    } else {
      const index = this.selectedOptions.indexOf(optionValue.value);
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
    if (this.filterCallback) {
      this.filterCallback(this.selectedOptions);
    }
  }
}
