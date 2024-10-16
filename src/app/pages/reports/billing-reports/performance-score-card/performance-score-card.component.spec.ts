import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceScoreCardComponent } from './performance-score-card.component';

describe('PerformanceScoreCardComponent', () => {
  let component: PerformanceScoreCardComponent;
  let fixture: ComponentFixture<PerformanceScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceScoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
