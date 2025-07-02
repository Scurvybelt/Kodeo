import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV3Component } from './project-v3.component';

describe('ProjectV3Component', () => {
  let component: ProjectV3Component;
  let fixture: ComponentFixture<ProjectV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
