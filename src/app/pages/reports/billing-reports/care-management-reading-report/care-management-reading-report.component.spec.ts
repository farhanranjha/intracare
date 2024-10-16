import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareManagementReadingReportComponent } from './care-management-reading-report.component';

describe('CareManagementReadingReportComponent', () => {
  let component: CareManagementReadingReportComponent;
  let fixture: ComponentFixture<CareManagementReadingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareManagementReadingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareManagementReadingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
