import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent3Component } from './list-student3.component';

describe('ListStudent3Component', () => {
  let component: ListStudent3Component;
  let fixture: ComponentFixture<ListStudent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
