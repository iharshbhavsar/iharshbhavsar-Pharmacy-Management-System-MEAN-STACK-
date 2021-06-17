import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMedicineComponent } from './homepage-medicine.component';

describe('HomepageMedicineComponent', () => {
  let component: HomepageMedicineComponent;
  let fixture: ComponentFixture<HomepageMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
