import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHipotecaComponent } from './view-hipoteca.component';

describe('ViewHipotecaComponent', () => {
  let component: ViewHipotecaComponent;
  let fixture: ComponentFixture<ViewHipotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHipotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
