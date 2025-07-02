import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementHeaderComponent } from './project-management-header.component';

describe('ProjectManagementHeaderComponent', () => {
  let component: ProjectManagementHeaderComponent;
  let fixture: ComponentFixture<ProjectManagementHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
