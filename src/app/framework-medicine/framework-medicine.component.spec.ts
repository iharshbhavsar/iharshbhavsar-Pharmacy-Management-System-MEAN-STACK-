import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkMedicineComponent } from './framework-medicine.component';

describe('FrameworkMedicineComponent', () => {
  let component: FrameworkMedicineComponent;
  let fixture: ComponentFixture<FrameworkMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
