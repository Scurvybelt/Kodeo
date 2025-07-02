import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterFooterComponent } from './ai-writer-footer.component';

describe('AiWriterFooterComponent', () => {
  let component: AiWriterFooterComponent;
  let fixture: ComponentFixture<AiWriterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiWriterFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWriterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
