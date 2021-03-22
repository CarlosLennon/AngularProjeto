import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarReadComponent } from './addcar-read.component';

describe('AddcarReadComponent', () => {
  let component: AddcarReadComponent;
  let fixture: ComponentFixture<AddcarReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcarReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
