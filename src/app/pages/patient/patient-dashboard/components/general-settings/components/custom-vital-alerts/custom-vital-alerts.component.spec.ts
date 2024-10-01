import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomVitalAlertsComponent } from "./custom-vital-alerts.component";

describe("CustomVitalAlertsComponent", () => {
  let component: CustomVitalAlertsComponent;
  let fixture: ComponentFixture<CustomVitalAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVitalAlertsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomVitalAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
