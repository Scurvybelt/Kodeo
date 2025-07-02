import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDefaultComponent } from './crm-default.component';

describe('CrmDefaultComponent', () => {
  let component: CrmDefaultComponent;
  let fixture: ComponentFixture<CrmDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
