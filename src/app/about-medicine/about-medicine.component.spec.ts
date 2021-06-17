import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMedicineComponent } from './about-medicine.component';

describe('AboutMedicineComponent', () => {
  let component: AboutMedicineComponent;
  let fixture: ComponentFixture<AboutMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
