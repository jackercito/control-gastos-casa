import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngresosComponent } from './create-ingresos.component';

describe('CreateIngresosComponent', () => {
  let component: CreateIngresosComponent;
  let fixture: ComponentFixture<CreateIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
