import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityDefaultComponent } from './cyber-security-default.component';

describe('CyberSecurityDefaultComponent', () => {
  let component: CyberSecurityDefaultComponent;
  let fixture: ComponentFixture<CyberSecurityDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurityDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
