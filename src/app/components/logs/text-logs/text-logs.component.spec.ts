import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLogsComponent } from './text-logs.component';

describe('TextLogsComponent', () => {
  let component: TextLogsComponent;
  let fixture: ComponentFixture<TextLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
