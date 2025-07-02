import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCrmComponent } from './faq-crm.component';

describe('FaqCrmComponent', () => {
  let component: FaqCrmComponent;
  let fixture: ComponentFixture<FaqCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
