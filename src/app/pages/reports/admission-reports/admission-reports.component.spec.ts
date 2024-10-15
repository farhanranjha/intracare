import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionReportsComponent } from './admission-reports.component';

describe('AdmissionReportsComponent', () => {
  let component: AdmissionReportsComponent;
  let fixture: ComponentFixture<AdmissionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
