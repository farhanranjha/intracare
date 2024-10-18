import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaidBillingReportComponent } from './medicaid-billing-report.component';

describe('MedicaidBillingReportComponent', () => {
  let component: MedicaidBillingReportComponent;
  let fixture: ComponentFixture<MedicaidBillingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicaidBillingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicaidBillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
