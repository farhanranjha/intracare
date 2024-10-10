import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOnboardingComponent } from './patient-onboarding.component';

describe('PatientOnboardingComponent', () => {
  let component: PatientOnboardingComponent;
  let fixture: ComponentFixture<PatientOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
