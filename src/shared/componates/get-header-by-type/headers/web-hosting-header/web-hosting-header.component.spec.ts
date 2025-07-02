import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingHeaderComponent } from './web-hosting-header.component';

describe('WebHostingHeaderComponent', () => {
  let component: WebHostingHeaderComponent;
  let fixture: ComponentFixture<WebHostingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHostingHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHostingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
