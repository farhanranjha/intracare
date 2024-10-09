import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogComponent } from './timer-log.component';

describe('TimerLogComponent', () => {
  let component: TimerLogComponent;
  let fixture: ComponentFixture<TimerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
