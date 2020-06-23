import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent4Component } from './view-lits-student4.component';

describe('ViewLitsStudent4Component', () => {
  let component: ViewLitsStudent4Component;
  let fixture: ComponentFixture<ViewLitsStudent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
