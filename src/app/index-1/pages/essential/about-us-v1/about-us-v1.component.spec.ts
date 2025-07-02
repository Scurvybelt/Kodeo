import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsV1Component } from './about-us-v1.component';

describe('AboutUsV1Component', () => {
  let component: AboutUsV1Component;
  let fixture: ComponentFixture<AboutUsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
