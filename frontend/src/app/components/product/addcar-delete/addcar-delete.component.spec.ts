import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarDeleteComponent } from './addcar-delete.component';

describe('AddcarDeleteComponent', () => {
  let component: AddcarDeleteComponent;
  let fixture: ComponentFixture<AddcarDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcarDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
