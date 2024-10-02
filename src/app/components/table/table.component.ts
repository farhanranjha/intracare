import { style } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
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
import { ColumnConfig } from "src/app/types/table/generic-table-types";

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
  @Input() rowsPerPage: number[] = [25, 50, 100];
  @Input() loading: boolean = false;
  @Input() totalRecords: number;
  @Input() onLazyLoad?: (event: LazyLoadEvent) => void;
  @Input() showTopBar?: boolean = false;
  searchValue: string | undefined;

  constructor(private router: Router) {}

  clear(table: any) {
    table.clear();
    this.searchValue = "";
  }
  getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }
}
