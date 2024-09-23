import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReadingsComponent } from './pending-readings.component';

describe('PendingReadingsComponent', () => {
  let component: PendingReadingsComponent;
  let fixture: ComponentFixture<PendingReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingReadingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
