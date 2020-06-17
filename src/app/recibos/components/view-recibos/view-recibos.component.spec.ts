import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecibosComponent } from './view-recibos.component';

describe('ViewRecibosComponent', () => {
  let component: ViewRecibosComponent;
  let fixture: ComponentFixture<ViewRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
