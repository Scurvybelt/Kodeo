import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFeatureWebBuilderComponent } from './block-feature-web-builder.component';

describe('BlockFeatureWebBuilderComponent', () => {
  let component: BlockFeatureWebBuilderComponent;
  let fixture: ComponentFixture<BlockFeatureWebBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFeatureWebBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFeatureWebBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
