import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNominasComponent } from './edit-nominas.component';

describe('EditNominasComponent', () => {
  let component: EditNominasComponent;
  let fixture: ComponentFixture<EditNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
