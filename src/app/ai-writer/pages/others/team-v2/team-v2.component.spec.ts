import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV2Component } from './team-v2.component';

describe('TeamV2Component', () => {
  let component: TeamV2Component;
  let fixture: ComponentFixture<TeamV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
