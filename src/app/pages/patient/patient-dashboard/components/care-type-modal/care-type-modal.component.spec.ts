import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTypeModalComponent } from './care-type-modal.component';

describe('CareTypeModalComponent', () => {
  let component: CareTypeModalComponent;
  let fixture: ComponentFixture<CareTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareTypeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
