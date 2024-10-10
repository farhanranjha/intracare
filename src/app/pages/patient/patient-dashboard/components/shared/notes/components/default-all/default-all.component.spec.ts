import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAllComponent } from './default-all.component';

describe('DefaultAllComponent', () => {
  let component: DefaultAllComponent;
  let fixture: ComponentFixture<DefaultAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
