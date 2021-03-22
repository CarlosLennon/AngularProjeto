import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarUpdateComponent } from './addcar-update.component';

describe('AddcarUpdateComponent', () => {
  let component: AddcarUpdateComponent;
  let fixture: ComponentFixture<AddcarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcarUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
