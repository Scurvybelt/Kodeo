import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterComponent } from './ai-writer.component';

describe('AiWriterComponent', () => {
  let component: AiWriterComponent;
  let fixture: ComponentFixture<AiWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiWriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
