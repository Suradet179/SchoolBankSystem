import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent5Component } from './view-lits-student5.component';

describe('ViewLitsStudent5Component', () => {
  let component: ViewLitsStudent5Component;
  let fixture: ComponentFixture<ViewLitsStudent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
