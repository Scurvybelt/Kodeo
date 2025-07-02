import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityFooterComponent } from './cyber-security-footer.component';

describe('CyberSecurityFooterComponent', () => {
  let component: CyberSecurityFooterComponent;
  let fixture: ComponentFixture<CyberSecurityFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSecurityFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurityFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
