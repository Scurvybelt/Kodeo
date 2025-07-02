import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderHeaderComponent } from './website-builder-header.component';

describe('WebsiteBuilderHeaderComponent', () => {
  let component: WebsiteBuilderHeaderComponent;
  let fixture: ComponentFixture<WebsiteBuilderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteBuilderHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteBuilderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
