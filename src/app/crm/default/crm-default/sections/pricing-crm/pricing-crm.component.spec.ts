import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCrmComponent } from './pricing-crm.component';

describe('PricingCrmComponent', () => {
  let component: PricingCrmComponent;
  let fixture: ComponentFixture<PricingCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
