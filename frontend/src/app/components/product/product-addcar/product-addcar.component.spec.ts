import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddcarComponent } from './product-addcar.component';

describe('ProductAddcarComponent', () => {
  let component: ProductAddcarComponent;
  let fixture: ComponentFixture<ProductAddcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
