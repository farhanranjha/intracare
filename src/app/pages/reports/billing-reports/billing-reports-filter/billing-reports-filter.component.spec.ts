import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BillingReportComponent } from "./billing-reports-filter.component";

describe("BillingReportsFilterComponent", () => {
  let component: BillingReportComponent;
  let fixture: ComponentFixture<BillingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
