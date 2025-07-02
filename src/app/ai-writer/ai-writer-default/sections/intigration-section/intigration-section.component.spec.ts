import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigrationSectionComponent } from './intigration-section.component';

describe('IntigrationSectionComponent', () => {
  let component: IntigrationSectionComponent;
  let fixture: ComponentFixture<IntigrationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntigrationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntigrationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
