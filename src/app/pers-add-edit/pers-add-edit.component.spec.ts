import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersAddEditComponent } from './pers-add-edit.component';

describe('PersAddEditComponent', () => {
  let component: PersAddEditComponent;
  let fixture: ComponentFixture<PersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
