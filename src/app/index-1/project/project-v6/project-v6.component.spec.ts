import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV6Component } from './project-v6.component';

describe('ProjectV6Component', () => {
  let component: ProjectV6Component;
  let fixture: ComponentFixture<ProjectV6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
