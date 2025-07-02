import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingV1Component } from './pricing-v1.component';

describe('PricingV1Component', () => {
  let component: PricingV1Component;
  let fixture: ComponentFixture<PricingV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
