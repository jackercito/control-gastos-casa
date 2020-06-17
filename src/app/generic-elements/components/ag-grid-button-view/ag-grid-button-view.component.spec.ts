import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridButtonViewComponent } from './ag-grid-button-view.component';

describe('AgGridButtonViewComponent', () => {
  let component: AgGridButtonViewComponent;
  let fixture: ComponentFixture<AgGridButtonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridButtonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
