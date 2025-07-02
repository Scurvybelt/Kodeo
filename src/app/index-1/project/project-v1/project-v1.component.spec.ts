import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV1Component } from './project-v1.component';

describe('ProjectV1Component', () => {
  let component: ProjectV1Component;
  let fixture: ComponentFixture<ProjectV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
