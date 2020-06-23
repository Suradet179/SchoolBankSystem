import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent6Component } from './list-student6.component';

describe('ListStudent6Component', () => {
  let component: ListStudent6Component;
  let fixture: ComponentFixture<ListStudent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
