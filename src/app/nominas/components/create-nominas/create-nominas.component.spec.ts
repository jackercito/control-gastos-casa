import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNominasComponent } from './create-nominas.component';

describe('CreateNominasComponent', () => {
  let component: CreateNominasComponent;
  let fixture: ComponentFixture<CreateNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
