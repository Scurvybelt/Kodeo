import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackWebBuilderComponent } from './feedback-web-builder.component';

describe('FeedbackWebBuilderComponent', () => {
  let component: FeedbackWebBuilderComponent;
  let fixture: ComponentFixture<FeedbackWebBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackWebBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackWebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
