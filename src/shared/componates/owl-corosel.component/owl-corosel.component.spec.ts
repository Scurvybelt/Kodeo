import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwlCoroselComponent } from './owl-corosel.component';


describe('OwlCoroselComponent', () => {
  let component: OwlCoroselComponent;
  let fixture: ComponentFixture<OwlCoroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwlCoroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCoroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
