import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWebsiteBuilderComponent } from './default-website-builder.component';

describe('DefaultWebsiteBuilderComponent', () => {
  let component: DefaultWebsiteBuilderComponent;
  let fixture: ComponentFixture<DefaultWebsiteBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultWebsiteBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultWebsiteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
