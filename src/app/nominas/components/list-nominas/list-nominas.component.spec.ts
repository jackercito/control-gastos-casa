import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNominasComponent } from './list-nominas.component';

describe('ListNominasComponent', () => {
  let component: ListNominasComponent;
  let fixture: ComponentFixture<ListNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
