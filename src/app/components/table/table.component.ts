import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressBarModule } from "primeng/progressbar";
import { SliderModule } from "primeng/slider";
import { Table, TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ColumnConfig } from "src/app/types/table/generic-table-types";
import { CustomFilterComponent } from "./custom-filter/custom-filter.component";

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
  styleUrl: "./table.component.scss",
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
  @Input() scrollHeight?: string = "100%";
  @Input() paginator?: boolean = true;

  searchValue: string | undefined;
  constructor(private router: Router) {}

  clear(table: any) {
    table.clear();
    this.searchValue = "";
  }
  getValue(obj: any, path: string): any {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }
}
