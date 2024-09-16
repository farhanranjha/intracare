import { Component } from '@angular/core';
import { TableModule } from 'primeng/table'; 
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { debounceTime, Subject } from 'rxjs';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pending-enrollments',
  standalone: true,
  imports: [TableModule, InputTextModule, DropdownModule, ProgressBarModule, ButtonModule , TagModule , MultiSelectModule , DialogModule],
  templateUrl: './pending-enrollments.component.html',
  styleUrl: './pending-enrollments.component.scss'
})
export class PendingEnrollmentsComponent {
  @ViewChild('dt1') dt1!: Table;
  searchValue: string = '';
  loading: boolean = false;
  displayEditDialog: boolean = false;
  selectedPatient: any = null;

  patients: any[] = [
    { date: 'July 22, 2024', name: 'Thomas Blackwood', dob:'10/16/1951', practice: 'East Valley Family Physicians', deviceType: 'BP', programType: ['RPM, CCM','Mediocre'],  status: 'First Call', progress: 75, consent: 'Consent Yes' },
    { date: 'July 22, 2024', name: 'James Huddleson', dob:'06/23/1980', practice: 'East Valley Family Physicians', deviceType: 'BP', programType: ['RPM, CCM','Mediocre'],  status: 'Second Call', progress: 45, consent: 'Consent Yes' },
    { date: 'July 22, 2024', name: 'Jim Carter', dob:'02/26/1980', practice: 'East Valley Family Physicians', deviceType: 'BP', programType: ['RPM, CCM','Mediocre'],  status: 'First Call', progress: 25, consent: 'Consent Yes' },
    { date: 'July 22, 2024', name: 'Chris Hemsworth', dob:'12/03/1987', practice: 'East Valley Family Physicians', deviceType: 'BP', programType: ['RPM, CCM','Mediocre'],  status: 'First Call', progress: 100, consent: 'Consent No' },
    { date: 'July 22, 2024', name: 'Chris Evans', dob:'12/02/1989', practice: 'East Valley Family Physicians', deviceType: 'BP', programType: ['RPM, CCM','Mediocre'],  status: 'Second Call', progress: 45, consent: 'Consent No' },
  ];

  private searchSubject: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(value => {
      if (this.dt1) {
        this.dt1.filterGlobal(value, 'contains');
      }
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  clear(table: any) {
    this.searchValue = '';
    table.clear();
  }

  showEditDialog(patient: any) {
    this.selectedPatient = patient;
    this.displayEditDialog = true;
  }

}