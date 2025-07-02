import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppLandingHeaderComponent } from './mobile-app-landing-header.component';

describe('MobileAppLandingHeaderComponent', () => {
  let component: MobileAppLandingHeaderComponent;
  let fixture: ComponentFixture<MobileAppLandingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppLandingHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppLandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
