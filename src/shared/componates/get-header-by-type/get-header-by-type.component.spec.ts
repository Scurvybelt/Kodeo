import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHeaderByTypeComponent } from './get-header-by-type.component';

describe('GetHeaderByTypeComponent', () => {
  let component: GetHeaderByTypeComponent;
  let fixture: ComponentFixture<GetHeaderByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetHeaderByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHeaderByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
