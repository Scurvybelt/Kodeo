import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV2Component } from './project-v2.component';

describe('ProjectV2Component', () => {
  let component: ProjectV2Component;
  let fixture: ComponentFixture<ProjectV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
