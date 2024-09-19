import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsNotAddressedComponent } from './readings-not-addressed.component';

describe('ReadingsNotAddressedComponent', () => {
  let component: ReadingsNotAddressedComponent;
  let fixture: ComponentFixture<ReadingsNotAddressedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingsNotAddressedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingsNotAddressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
