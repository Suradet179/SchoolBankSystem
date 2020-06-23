import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent1Component } from './list-student1.component';

describe('ListStudent1Component', () => {
  let component: ListStudent1Component;
  let fixture: ComponentFixture<ListStudent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
