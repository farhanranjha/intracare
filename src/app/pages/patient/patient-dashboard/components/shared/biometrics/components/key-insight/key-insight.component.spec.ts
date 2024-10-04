import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInsightComponent } from './key-insight.component';

describe('KeyInsightComponent', () => {
  let component: KeyInsightComponent;
  let fixture: ComponentFixture<KeyInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyInsightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
