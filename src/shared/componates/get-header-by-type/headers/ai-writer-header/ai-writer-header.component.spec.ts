import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterHeaderComponent } from './ai-writer-header.component';

describe('AiWriterHeaderComponent', () => {
  let component: AiWriterHeaderComponent;
  let fixture: ComponentFixture<AiWriterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiWriterHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWriterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
