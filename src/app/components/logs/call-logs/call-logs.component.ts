import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {  TableComponent } from '../../table/table.component';
import { DashboardRow } from 'src/app/services/dashboard/dashboard.service';
import { ColumnConfig } from 'src/app/types/table/generic-table-types';

@Component({
  selector: "app-call-logs",
  standalone: true,
  imports:[TableModule , CommonModule , FormsModule , TableComponent ],
  templateUrl: './call-logs.component.html',
})
export class CallLogsComponent implements OnInit {
  @Input() callLogs: any[] = [];
  @ViewChild("actionTemplate", { static: true }) actionTemplate: any;
  columns: ColumnConfig[] = [];
  rowData: DashboardRow[] = [];
  totalRecords: number = 0;
  page: number = 1;
  pageSize: number = 10;
  sortField: string = "id";
  sortOrder: "asc" | "desc" = "asc";
  searchTerm: string = "";

  ngOnInit() {
    this.columns = [
      {
        name: 'Date & Time', field: 'dateTime',
        filterType: ''
      },
      { 
        name: 'Call From' , field: 'callFrom' , filterType: "",
      },
      {
        name: 'Call To', field: 'callTo',
        filterType: ''
      },
      {
        name: 'Phone Number', field: 'phoneNumber',
        filterType: ''
      },
      {
        name: 'Start Time', field: 'startTime',
        filterType: ''
      },
      {
        name: 'End Time', field: 'endTime',
        filterType: ''
      },
      {
        name: 'Duration (mm:ss)', field: 'duration',
        filterType: ''
      },
      {
        name: 'Status', field: 'status',
        filterType: ''
      },
    ];
  }
}
