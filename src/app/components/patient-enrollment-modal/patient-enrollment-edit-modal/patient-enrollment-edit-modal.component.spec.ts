import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PatientEnrollmentEditModalComponent } from "./patient-enrollment-edit-modal.component";

describe("PatientEnrollmentEditModalComponent", () => {
  let component: PatientEnrollmentEditModalComponent;
  let fixture: ComponentFixture<PatientEnrollmentEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEnrollmentEditModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientEnrollmentEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
