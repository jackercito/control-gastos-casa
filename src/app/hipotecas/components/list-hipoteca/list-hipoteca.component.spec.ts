import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHipotecaComponent } from './list-hipoteca.component';

describe('ListHipotecaComponent', () => {
  let component: ListHipotecaComponent;
  let fixture: ComponentFixture<ListHipotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHipotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
