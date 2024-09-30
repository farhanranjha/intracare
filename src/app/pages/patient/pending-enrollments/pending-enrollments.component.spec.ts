import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PendingEnrollmentsComponent } from "./pending-enrollments.component";

describe("PendingenrollmentsComponent", () => {
  let component: PendingEnrollmentsComponent;
  let fixture: ComponentFixture<PendingEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingEnrollmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
