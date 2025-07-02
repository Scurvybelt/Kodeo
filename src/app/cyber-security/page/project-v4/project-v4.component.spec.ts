import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectV4Component } from './project-v4.component';

describe('ProjectV4Component', () => {
  let component: ProjectV4Component;
  let fixture: ComponentFixture<ProjectV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectV4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
