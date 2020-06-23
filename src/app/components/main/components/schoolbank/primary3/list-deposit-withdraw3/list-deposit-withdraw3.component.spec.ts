import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw3Component } from './list-deposit-withdraw3.component';

describe('ListDepositWithdraw3Component', () => {
  let component: ListDepositWithdraw3Component;
  let fixture: ComponentFixture<ListDepositWithdraw3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
