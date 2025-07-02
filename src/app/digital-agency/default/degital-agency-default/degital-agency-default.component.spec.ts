import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegitalAgencyDefaultComponent } from './degital-agency-default.component';

describe('DegitalAgencyDefaultComponent', () => {
  let component: DegitalAgencyDefaultComponent;
  let fixture: ComponentFixture<DegitalAgencyDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegitalAgencyDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegitalAgencyDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
