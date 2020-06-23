import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent5Component } from './list-student5.component';

describe('ListStudent5Component', () => {
  let component: ListStudent5Component;
  let fixture: ComponentFixture<ListStudent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
