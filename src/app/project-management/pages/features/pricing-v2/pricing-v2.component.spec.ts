import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingV2Component } from './pricing-v2.component';

describe('PricingV2Component', () => {
  let component: PricingV2Component;
  let fixture: ComponentFixture<PricingV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
