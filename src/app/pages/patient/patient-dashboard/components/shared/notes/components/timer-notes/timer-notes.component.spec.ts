import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerNotesComponent } from './timer-notes.component';

describe('TimerNotesComponent', () => {
  let component: TimerNotesComponent;
  let fixture: ComponentFixture<TimerNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
