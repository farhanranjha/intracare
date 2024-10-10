import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingNotesComponent } from './reading-notes.component';

describe('ReadingNotesComponent', () => {
  let component: ReadingNotesComponent;
  let fixture: ComponentFixture<ReadingNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
