import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecibosComponent } from './edit-recibos.component';

describe('EditRecibosComponent', () => {
  let component: EditRecibosComponent;
  let fixture: ComponentFixture<EditRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
