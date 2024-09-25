import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AttachDeviceComponent } from "./attach-device.component";

describe("AttachDeviceComponent", () => {
  let component: AttachDeviceComponent;
  let fixture: ComponentFixture<AttachDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachDeviceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttachDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
