import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerCrmComponent } from './hero-banner-crm.component';

describe('HeroBannerCrmComponent', () => {
  let component: HeroBannerCrmComponent;
  let fixture: ComponentFixture<HeroBannerCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBannerCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBannerCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
