import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHoldModalComponent } from './patient-hold-modal.component';

describe('PatientHoldModalComponent', () => {
  let component: PatientHoldModalComponent;
  let fixture: ComponentFixture<PatientHoldModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHoldModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientHoldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
