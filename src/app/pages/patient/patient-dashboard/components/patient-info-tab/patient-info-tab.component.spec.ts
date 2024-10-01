import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PatientInfoTabComponent } from "./patient-info-tab.component";

describe("PatientInfoTabComponent", () => {
  let component: PatientInfoTabComponent;
  let fixture: ComponentFixture<PatientInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientInfoTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
