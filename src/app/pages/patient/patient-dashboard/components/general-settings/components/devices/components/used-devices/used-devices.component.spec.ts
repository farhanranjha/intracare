import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedDevicesComponent } from './used-devices.component';

describe('UsedDevicesComponent', () => {
  let component: UsedDevicesComponent;
  let fixture: ComponentFixture<UsedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedDevicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
