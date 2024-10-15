import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmBillingReportComponent } from './rpm-billing-report.component';

describe('RpmBillingReportComponent', () => {
  let component: RpmBillingReportComponent;
  let fixture: ComponentFixture<RpmBillingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpmBillingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RpmBillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
