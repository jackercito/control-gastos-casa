import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHipotecaComponent } from './edit-hipoteca.component';

describe('EditHipotecaComponent', () => {
  let component: EditHipotecaComponent;
  let fixture: ComponentFixture<EditHipotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHipotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
