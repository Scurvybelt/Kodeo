import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskFooterComponent } from './help-desk-footer.component';

describe('HelpDeskFooterComponent', () => {
  let component: HelpDeskFooterComponent;
  let fixture: ComponentFixture<HelpDeskFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDeskFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDeskFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
