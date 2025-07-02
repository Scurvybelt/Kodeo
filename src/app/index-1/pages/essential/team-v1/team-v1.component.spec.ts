import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV1Component } from './team-v1.component';

describe('TeamV1Component', () => {
  let component: TeamV1Component;
  let fixture: ComponentFixture<TeamV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
