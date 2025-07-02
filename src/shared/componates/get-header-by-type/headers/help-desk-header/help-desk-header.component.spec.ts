import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskHeaderComponent } from './help-desk-header.component';

describe('HelpDeskHeaderComponent', () => {
  let component: HelpDeskHeaderComponent;
  let fixture: ComponentFixture<HelpDeskHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDeskHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDeskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
