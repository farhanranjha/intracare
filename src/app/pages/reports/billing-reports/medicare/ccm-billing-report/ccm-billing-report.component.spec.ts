import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmBillingReportComponent } from './ccm-billing-report.component';

describe('CcmBillingReportComponent', () => {
  let component: CcmBillingReportComponent;
  let fixture: ComponentFixture<CcmBillingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmBillingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcmBillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
