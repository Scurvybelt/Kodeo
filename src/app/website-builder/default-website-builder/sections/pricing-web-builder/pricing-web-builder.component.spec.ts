import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingWebBuilderComponent } from './pricing-web-builder.component';

describe('PricingWebBuilderComponent', () => {
  let component: PricingWebBuilderComponent;
  let fixture: ComponentFixture<PricingWebBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingWebBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingWebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
