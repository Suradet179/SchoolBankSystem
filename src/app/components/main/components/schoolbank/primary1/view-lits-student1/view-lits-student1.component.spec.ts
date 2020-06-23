import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent1Component } from './view-lits-student1.component';

describe('ViewLitsStudent1Component', () => {
  let component: ViewLitsStudent1Component;
  let fixture: ComponentFixture<ViewLitsStudent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
