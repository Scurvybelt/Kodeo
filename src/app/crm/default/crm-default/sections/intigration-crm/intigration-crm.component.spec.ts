import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigrationCrmComponent } from './intigration-crm.component';

describe('IntigrationCrmComponent', () => {
  let component: IntigrationCrmComponent;
  let fixture: ComponentFixture<IntigrationCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntigrationCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntigrationCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
