import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMedicineComponent } from './header-medicine.component';

describe('HeaderMedicineComponent', () => {
  let component: HeaderMedicineComponent;
  let fixture: ComponentFixture<HeaderMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
