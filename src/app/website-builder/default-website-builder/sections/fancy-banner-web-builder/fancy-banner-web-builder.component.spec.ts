import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBannerWebBuilderComponent } from './fancy-banner-web-builder.component';

describe('FancyBannerWebBuilderComponent', () => {
  let component: FancyBannerWebBuilderComponent;
  let fixture: ComponentFixture<FancyBannerWebBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBannerWebBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyBannerWebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
