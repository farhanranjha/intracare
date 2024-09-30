import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-patient-reports',
  standalone: true,
  imports:[ButtonModule , TableModule , MenuModule],
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.scss']
})
export class PatientReportsComponent {
  reportData = [
    { month: 'Sep 2024', avgBP: '100', avgBG: '80', billingCycleStart: 'Sep 01, 2024', code99454: '', code99457: '', code99458: '', successfulContact: 'No' },
    { month: 'Aug 2024', avgBP: '110', avgBG: '70', billingCycleStart: 'Aug 01, 2024', code99454: '', code99457: '', code99458: '', successfulContact: 'No' },
    { month: 'Jul 2024', avgBP: '95', avgBG: '65', billingCycleStart: 'Jul 01, 2024', code99454: '', code99457: '', code99458: '', successfulContact: 'Yes' },
    { month: 'Jun 2024', avgBP: '80', avgBG: '88', billingCycleStart: 'Jun 01, 2024', code99454: '', code99457: '', code99458: '', successfulContact: 'No' },
    { month: 'May 2024', avgBP: '120', avgBG: '93', billingCycleStart: 'May 01, 2024', code99454: '', code99457: '', code99458: '', successfulContact: 'No' }
  ];


}
