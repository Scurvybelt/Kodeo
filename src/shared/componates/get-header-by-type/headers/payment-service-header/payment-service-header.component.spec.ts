import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentServiceHeaderComponent } from './payment-service-header.component';

describe('PaymentServiceHeaderComponent', () => {
  let component: PaymentServiceHeaderComponent;
  let fixture: ComponentFixture<PaymentServiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentServiceHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
