import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecibosComponent } from './create-recibos.component';

describe('CreateRecibosComponent', () => {
  let component: CreateRecibosComponent;
  let fixture: ComponentFixture<CreateRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
