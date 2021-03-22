import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDeleteComponent } from './buy-delete.component';

describe('BuyDeleteComponent', () => {
  let component: BuyDeleteComponent;
  let fixture: ComponentFixture<BuyDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
