import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV5Component } from './project-v5.component';

describe('ProjectV5Component', () => {
  let component: ProjectV5Component;
  let fixture: ComponentFixture<ProjectV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
