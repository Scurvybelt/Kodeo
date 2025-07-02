import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusV2Component } from './aboutus-v2.component';

describe('AboutusV2Component', () => {
  let component: AboutusV2Component;
  let fixture: ComponentFixture<AboutusV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
