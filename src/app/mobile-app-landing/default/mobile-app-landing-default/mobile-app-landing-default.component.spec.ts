import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppLandingDefaultComponent } from './mobile-app-landing-default.component';

describe('MobileAppLandingDefaultComponent', () => {
  let component: MobileAppLandingDefaultComponent;
  let fixture: ComponentFixture<MobileAppLandingDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppLandingDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppLandingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
