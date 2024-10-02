import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareplansComponent } from './careplans.component';

describe('CareplansComponent', () => {
  let component: CareplansComponent;
  let fixture: ComponentFixture<CareplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
