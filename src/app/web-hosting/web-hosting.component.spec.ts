import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingComponent } from './web-hosting.component';

describe('WebHostingComponent', () => {
  let component: WebHostingComponent;
  let fixture: ComponentFixture<WebHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHostingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
