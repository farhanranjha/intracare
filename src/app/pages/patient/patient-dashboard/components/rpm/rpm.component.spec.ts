import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RPMComponent } from "./rpm.component";

describe("RPMComponent", () => {
  let component: RPMComponent;
  let fixture: ComponentFixture<RPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
