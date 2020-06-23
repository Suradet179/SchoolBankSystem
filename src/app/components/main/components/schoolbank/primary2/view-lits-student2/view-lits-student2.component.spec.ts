import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent2Component } from './view-lits-student2.component';

describe('ViewLitsStudent2Component', () => {
  let component: ViewLitsStudent2Component;
  let fixture: ComponentFixture<ViewLitsStudent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
