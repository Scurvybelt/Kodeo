import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBannerCrmComponent } from './fancy-banner-crm.component';

describe('FancyBannerCrmComponent', () => {
  let component: FancyBannerCrmComponent;
  let fixture: ComponentFixture<FancyBannerCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBannerCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyBannerCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
