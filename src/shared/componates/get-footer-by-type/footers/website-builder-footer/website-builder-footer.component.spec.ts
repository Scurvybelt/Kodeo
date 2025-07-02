import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderFooterComponent } from './website-builder-footer.component';

describe('WebsiteBuilderFooterComponent', () => {
  let component: WebsiteBuilderFooterComponent;
  let fixture: ComponentFixture<WebsiteBuilderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteBuilderFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteBuilderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
