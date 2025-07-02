import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqV1Component } from './faq-v1.component';

describe('FaqV1Component', () => {
  let component: FaqV1Component;
  let fixture: ComponentFixture<FaqV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
