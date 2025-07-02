import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAgencyFooterComponent } from './digital-agency-footer.component';

describe('DigitalAgencyFooterComponent', () => {
  let component: DigitalAgencyFooterComponent;
  let fixture: ComponentFixture<DigitalAgencyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalAgencyFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalAgencyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
