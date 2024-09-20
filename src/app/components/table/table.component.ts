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
import { CustomFilterComponent } from "./custom-filter/custom-filter.component";
export interface ColumnConfig {
  name: string;
  field: string;
  filterType: string;
  filterKey?: string;
  [key: string]: any;
  options?: string[];
  selectedOptions?: string[];
  isCustom?: boolean;
  template?: any;
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
    CustomFilterComponent,
  ],
  templateUrl: "./table.component.html",
})
export class TableComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() rowData: any[] = [];
  @Input() filters: FilterConfig[] = [];
  @Input() rowsPerPage: number;
  @Input() loading: boolean = false;

  searchValue: string | undefined;
  clear(table: any) {
    table.clear();
    this.searchValue = "";
  }
  getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }
  onCheckboxChange(field: string, option: any, isChecked: boolean, filterCallback: Function) {
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
    filterCallback(column.selectedOptions);
  }
}
