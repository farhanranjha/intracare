import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRouterComponent } from './tab-router.component';

describe('TabRouterComponent', () => {
  let component: TabRouterComponent;
  let fixture: ComponentFixture<TabRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
