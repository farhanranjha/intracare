import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSidebarComponent } from './messages-sidebar.component';

describe('MessagesSidebarComponent', () => {
  let component: MessagesSidebarComponent;
  let fixture: ComponentFixture<MessagesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
