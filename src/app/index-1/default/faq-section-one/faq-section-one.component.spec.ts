import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSectionOneComponent } from './faq-section-one.component';

describe('FaqSectionOneComponent', () => {
  let component: FaqSectionOneComponent;
  let fixture: ComponentFixture<FaqSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqSectionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
