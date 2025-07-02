import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterFancyBannerSectionComponent } from './ai-writer-fancy-banner-section.component';

describe('AiWriterFancyBannerSectionComponent', () => {
  let component: AiWriterFancyBannerSectionComponent;
  let fixture: ComponentFixture<AiWriterFancyBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiWriterFancyBannerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWriterFancyBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
