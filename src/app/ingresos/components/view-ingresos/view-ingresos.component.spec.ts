import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngresosComponent } from './view-ingresos.component';

describe('ViewIngresosComponent', () => {
  let component: ViewIngresosComponent;
  let fixture: ComponentFixture<ViewIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
