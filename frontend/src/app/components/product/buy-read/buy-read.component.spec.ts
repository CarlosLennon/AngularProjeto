import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyReadComponent } from './buy-read.component';

describe('BuyReadComponent', () => {
  let component: BuyReadComponent;
  let fixture: ComponentFixture<BuyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
