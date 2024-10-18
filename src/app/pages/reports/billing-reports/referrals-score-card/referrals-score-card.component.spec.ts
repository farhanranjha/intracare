import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsScoreCardComponent } from './referrals-score-card.component';

describe('ReferralsScoreCardComponent', () => {
  let component: ReferralsScoreCardComponent;
  let fixture: ComponentFixture<ReferralsScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralsScoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralsScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
