import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent3Component } from './view-lits-student3.component';

describe('ViewLitsStudent3Component', () => {
  let component: ViewLitsStudent3Component;
  let fixture: ComponentFixture<ViewLitsStudent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
