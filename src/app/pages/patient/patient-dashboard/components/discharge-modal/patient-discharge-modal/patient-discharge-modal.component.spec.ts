import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDischargeModalComponent } from './patient-discharge-modal.component';

describe('PatientDischargeModalComponent', () => {
  let component: PatientDischargeModalComponent;
  let fixture: ComponentFixture<PatientDischargeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDischargeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientDischargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
