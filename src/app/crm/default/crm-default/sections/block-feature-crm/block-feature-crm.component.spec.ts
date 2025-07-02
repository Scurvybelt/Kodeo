import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFeatureCrmComponent } from './block-feature-crm.component';

describe('BlockFeatureCrmComponent', () => {
  let component: BlockFeatureCrmComponent;
  let fixture: ComponentFixture<BlockFeatureCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFeatureCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFeatureCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
