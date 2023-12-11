import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMinifyerComponent } from './html-minifyer.component';

describe('HtmlMinifyerComponent', () => {
  let component: HtmlMinifyerComponent;
  let fixture: ComponentFixture<HtmlMinifyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlMinifyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlMinifyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
