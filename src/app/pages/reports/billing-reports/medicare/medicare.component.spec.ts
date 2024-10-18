import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareComponent } from './medicare.component';

describe('MedicareComponent', () => {
  let component: MedicareComponent;
  let fixture: ComponentFixture<MedicareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
