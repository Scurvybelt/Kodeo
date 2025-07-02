import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityHeaderComponent } from './cyber-security-header.component';

describe('CyberSecurityHeaderComponent', () => {
  let component: CyberSecurityHeaderComponent;
  let fixture: ComponentFixture<CyberSecurityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
