import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterDefaultComponent } from './ai-writer-default.component';

describe('AiWriterDefaultComponent', () => {
  let component: AiWriterDefaultComponent;
  let fixture: ComponentFixture<AiWriterDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiWriterDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWriterDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
