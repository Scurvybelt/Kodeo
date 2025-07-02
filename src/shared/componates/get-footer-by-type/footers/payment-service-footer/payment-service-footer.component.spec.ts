import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentServiceFooterComponent } from './payment-service-footer.component';

describe('PaymentServiceFooterComponent', () => {
  let component: PaymentServiceFooterComponent;
  let fixture: ComponentFixture<PaymentServiceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentServiceFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentServiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
