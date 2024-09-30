import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DeviceTileComponent } from "./device-tile.component";

describe("DeviceTileComponent", () => {
  let component: DeviceTileComponent;
  let fixture: ComponentFixture<DeviceTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
