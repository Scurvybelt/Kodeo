import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingFooterComponent } from './web-hosting-footer.component';

describe('WebHostingFooterComponent', () => {
  let component: WebHostingFooterComponent;
  let fixture: ComponentFixture<WebHostingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHostingFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHostingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
