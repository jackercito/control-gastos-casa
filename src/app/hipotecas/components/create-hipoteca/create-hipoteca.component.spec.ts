import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHipotecaComponent } from './create-hipoteca.component';

describe('CreateHipotecaComponent', () => {
  let component: CreateHipotecaComponent;
  let fixture: ComponentFixture<CreateHipotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHipotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
