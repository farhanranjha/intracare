import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingReportsComponent } from './billing-reports.component';

describe('BillingReportsComponent', () => {
  let component: BillingReportsComponent;
  let fixture: ComponentFixture<BillingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
