import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAgencyHeaderComponent } from './digital-agency-header.component';

describe('DigitalAgencyHeaderComponent', () => {
  let component: DigitalAgencyHeaderComponent;
  let fixture: ComponentFixture<DigitalAgencyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalAgencyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalAgencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
