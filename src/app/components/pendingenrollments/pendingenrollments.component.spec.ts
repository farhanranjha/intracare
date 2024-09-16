import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingenrollmentsComponent } from './pendingenrollments.component';

describe('PendingenrollmentsComponent', () => {
  let component: PendingenrollmentsComponent;
  let fixture: ComponentFixture<PendingenrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingenrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
