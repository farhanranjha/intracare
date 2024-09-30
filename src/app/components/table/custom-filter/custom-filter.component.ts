import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-custom-filter",
  standalone: true,
  imports: [CheckboxModule, CommonModule],
  templateUrl: "./custom-filter.component.html",
})
export class CustomFilterComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() filterCallback: (selectedOptions: string[]) => void;
  @Output() selectedOptionsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() selectedOptions: string[] = [];

  selected: string[] = [];

  ngOnInit(): void {
    console.log("====selectedOptions in customFilter===> ", this.selectedOptions);
  }
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
    this.selectedOptionsChange.emit(this.selectedOptions);
    if (this.filterCallback) {
      this.filterCallback(this.selectedOptions);
    }
  }
}
