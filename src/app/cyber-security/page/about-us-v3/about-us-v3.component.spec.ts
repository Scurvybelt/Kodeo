import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsV3Component } from './about-us-v3.component';

describe('AboutUsV3Component', () => {
  let component: AboutUsV3Component;
  let fixture: ComponentFixture<AboutUsV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
