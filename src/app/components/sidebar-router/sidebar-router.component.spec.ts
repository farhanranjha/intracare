import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRouterComponent } from './sidebar-router.component';

describe('SidebarRouterComponent', () => {
  let component: SidebarRouterComponent;
  let fixture: ComponentFixture<SidebarRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
