import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PikuLoaderComponent } from './piku-loader.component';

describe('PikuLoaderComponent', () => {
  let component: PikuLoaderComponent;
  let fixture: ComponentFixture<PikuLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PikuLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PikuLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
