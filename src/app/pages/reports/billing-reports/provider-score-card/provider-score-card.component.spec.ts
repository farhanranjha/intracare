import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderScoreCardComponent } from './provider-score-card.component';

describe('ProviderScoreCardComponent', () => {
  let component: ProviderScoreCardComponent;
  let fixture: ComponentFixture<ProviderScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderScoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
