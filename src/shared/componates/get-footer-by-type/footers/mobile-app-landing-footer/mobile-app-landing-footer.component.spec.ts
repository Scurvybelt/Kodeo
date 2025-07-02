import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppLandingFooterComponent } from './mobile-app-landing-footer.component';

describe('MobileAppLandingFooterComponent', () => {
  let component: MobileAppLandingFooterComponent;
  let fixture: ComponentFixture<MobileAppLandingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppLandingFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppLandingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
