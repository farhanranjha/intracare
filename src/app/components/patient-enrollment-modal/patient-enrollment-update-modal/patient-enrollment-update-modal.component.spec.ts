import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PatientEnrollmentUpdateModalComponent } from "./patient-enrollment-update-modal.component";

describe("PatientEnrollmentUpdateModalComponent", () => {
  let component: PatientEnrollmentUpdateModalComponent;
  let fixture: ComponentFixture<PatientEnrollmentUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEnrollmentUpdateModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientEnrollmentUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
