import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent2Component } from './list-student2.component';

describe('ListStudent2Component', () => {
  let component: ListStudent2Component;
  let fixture: ComponentFixture<ListStudent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
