import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFooterByTypeComponent } from './get-footer-by-type.component';

describe('GetFooterByTypeComponent', () => {
  let component: GetFooterByTypeComponent;
  let fixture: ComponentFixture<GetFooterByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetFooterByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFooterByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
