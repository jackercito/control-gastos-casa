import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComprasComponent } from './create-compras.component';

describe('CreateComprasComponent', () => {
  let component: CreateComprasComponent;
  let fixture: ComponentFixture<CreateComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
