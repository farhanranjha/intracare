import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevicesModalComponent } from './edit-devices-modal.component';

describe('EditDevicesModalComponent', () => {
  let component: EditDevicesModalComponent;
  let fixture: ComponentFixture<EditDevicesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDevicesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDevicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
