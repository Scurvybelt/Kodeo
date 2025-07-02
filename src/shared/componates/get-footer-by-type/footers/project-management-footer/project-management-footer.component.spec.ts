import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementFooterComponent } from './project-management-footer.component';

describe('ProjectManagementFooterComponent', () => {
  let component: ProjectManagementFooterComponent;
  let fixture: ComponentFixture<ProjectManagementFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
