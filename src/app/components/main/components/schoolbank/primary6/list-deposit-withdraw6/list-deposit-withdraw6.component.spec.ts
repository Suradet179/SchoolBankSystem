import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw6Component } from './list-deposit-withdraw6.component';

describe('ListDepositWithdraw6Component', () => {
  let component: ListDepositWithdraw6Component;
  let fixture: ComponentFixture<ListDepositWithdraw6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
