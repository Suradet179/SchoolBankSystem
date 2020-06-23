import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLitsStudent6Component } from './view-lits-student6.component';

describe('ViewLitsStudent6Component', () => {
  let component: ViewLitsStudent6Component;
  let fixture: ComponentFixture<ViewLitsStudent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLitsStudent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLitsStudent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
