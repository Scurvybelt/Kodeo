import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCrmComponent } from './feedback-crm.component';

describe('FeedbackCrmComponent', () => {
  let component: FeedbackCrmComponent;
  let fixture: ComponentFixture<FeedbackCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
