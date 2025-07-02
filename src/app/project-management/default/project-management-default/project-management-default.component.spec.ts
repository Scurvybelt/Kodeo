import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementDefaultComponent } from './project-management-default.component';

describe('ProjectManagementDefaultComponent', () => {
  let component: ProjectManagementDefaultComponent;
  let fixture: ComponentFixture<ProjectManagementDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
