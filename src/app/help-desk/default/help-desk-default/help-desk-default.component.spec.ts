import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskDefaultComponent } from './help-desk-default.component';

describe('HelpDeskDefaultComponent', () => {
  let component: HelpDeskDefaultComponent;
  let fixture: ComponentFixture<HelpDeskDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDeskDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDeskDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
