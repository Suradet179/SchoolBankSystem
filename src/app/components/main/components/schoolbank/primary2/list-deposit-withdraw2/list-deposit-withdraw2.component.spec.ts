import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw2Component } from './list-deposit-withdraw2.component';

describe('ListDepositWithdraw2Component', () => {
  let component: ListDepositWithdraw2Component;
  let fixture: ComponentFixture<ListDepositWithdraw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
