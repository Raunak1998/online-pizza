import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponShowComponent } from './coupon-show.component';

describe('CouponShowComponent', () => {
  let component: CouponShowComponent;
  let fixture: ComponentFixture<CouponShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
