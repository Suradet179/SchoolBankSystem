import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent4Component } from './list-student4.component';

describe('ListStudent4Component', () => {
  let component: ListStudent4Component;
  let fixture: ComponentFixture<ListStudent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
