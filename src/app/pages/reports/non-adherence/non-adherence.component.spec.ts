import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAdherenceComponent } from './non-adherence.component';

describe('NonAdherenceComponent', () => {
  let component: NonAdherenceComponent;
  let fixture: ComponentFixture<NonAdherenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonAdherenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonAdherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
