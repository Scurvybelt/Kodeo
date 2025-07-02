import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppLandingComponent } from './mobile-app-landing.component';

describe('MobileAppLandingComponent', () => {
  let component: MobileAppLandingComponent;
  let fixture: ComponentFixture<MobileAppLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
