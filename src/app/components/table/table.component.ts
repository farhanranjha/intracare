import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressBarModule } from "primeng/progressbar";
import { SliderModule } from "primeng/slider";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
export interface ColumnConfig {
  name: string;
  field: string;
  filterType: string;
  filterKey?: string;
  [key: string]: any;
  options?: string[];
  selectedOptions?: string[];
}

export interface FilterConfig {
  key: string;
  template: any;
}
@Component({
  selector: "app-table",
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    HttpClientModule,
    CommonModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    CheckboxModule,
  ],
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() rowData: any[] = [];
  @Input() filters: FilterConfig[] = [];

  loading: boolean = false;
  searchValue: string | undefined;
  selectedFields: any[] = [];

  clear(table: any) {
    table.clear();
    this.searchValue = "";
  }

  toggleSelection(value: string, func: Function) {
    const index = this.selectedFields.indexOf(value);
    if (index > -1) {
      this.selectedFields.splice(index, 1);
    } else {
      this.selectedFields.push(value);
    }
    func(this.selectedFields);
  }

  isSelected(value: string): boolean {
    return this.selectedFields.includes(value);
  }
  getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }
  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case "unqualified":
        return "danger";
      case "qualified":
        return "success";
      case "new":
        return "info";
      case "negotiation":
        return "warning";
      default:
        return "default";
    }
  }

  onCheckboxChange(field: string, option: any, isChecked: boolean, filterCallback: Function) {
    console.log("==field=>", field);
    console.log("==option=>", option);
    console.log("==isChecked=>", isChecked);

    const column = this.columns.find((col) => col.field === field);
    if (!column) return;

    if (isChecked) {
      if (!column.selectedOptions.includes(option)) {
        column.selectedOptions.push(option);
      }
    } else {
      const index = column.selectedOptions.indexOf(option);
      if (index > -1) {
        column.selectedOptions.splice(index, 1);
      }
    }

    console.log("Updated selected options:", column.selectedOptions);

    filterCallback(column.selectedOptions);
  }
}
