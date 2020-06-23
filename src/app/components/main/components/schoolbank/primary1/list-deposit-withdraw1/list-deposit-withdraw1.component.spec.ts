import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw1Component } from './list-deposit-withdraw1.component';

describe('ListDepositWithdraw1Component', () => {
  let component: ListDepositWithdraw1Component;
  let fixture: ComponentFixture<ListDepositWithdraw1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
