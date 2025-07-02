import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerWebBuilderComponent } from './hero-banner-web-builder.component';

describe('HeroBannerWebBuilderComponent', () => {
  let component: HeroBannerWebBuilderComponent;
  let fixture: ComponentFixture<HeroBannerWebBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBannerWebBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBannerWebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
