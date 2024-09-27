import { style } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, Input, ViewChild } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressBarModule } from "primeng/progressbar";
import { SliderModule } from "primeng/slider";
import { Table, TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { CustomFilterComponent } from "./custom-filter/custom-filter.component";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
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
  filterTemplate?: any;
  sort?: boolean;
}

export interface FilterConfig {
  key: string;
  template: any;
}
@Component({
  selector: "intracare-table",
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
  styles: [
    `
      ::ng-deep .p-datatable-header {
        padding: 10px 0;
      }
      ::ng-deep .p-datatable-thead > tr > th {
        background-color: #f9f9f9;
      }
      ::ng-deep .p-datatable-tbody > tr {
        background-color: #fff;
      }
    `,
  ],
})
export class TableComponent {
  @ViewChild("dt1") dt1!: Table;
  @Input() columns: ColumnConfig[] = [];
  @Input() rowData: any[] = [];
  @Input() filters: FilterConfig[] = [];
  @Input() rowsPerPage: number[] = [25, 50, 100];
  @Input() loading: boolean = false;
  @Input() totalRecords: number;
  @Input() onLazyLoad?: (event: LazyLoadEvent) => void;
  @Input() showTopBar?: boolean = true;
  searchValue: string | undefined;

  constructor(private router: Router) {}

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
