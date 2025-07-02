import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingDefaultComponent } from './web-hosting-default.component';

describe('WebHostingDefaultComponent', () => {
  let component: WebHostingDefaultComponent;
  let fixture: ComponentFixture<WebHostingDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHostingDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHostingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
