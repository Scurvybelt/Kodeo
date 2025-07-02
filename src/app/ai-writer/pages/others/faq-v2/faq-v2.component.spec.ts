import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqV2Component } from './faq-v2.component';

describe('FaqV2Component', () => {
  let component: FaqV2Component;
  let fixture: ComponentFixture<FaqV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
