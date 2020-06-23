import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw4Component } from './list-deposit-withdraw4.component';

describe('ListDepositWithdraw4Component', () => {
  let component: ListDepositWithdraw4Component;
  let fixture: ComponentFixture<ListDepositWithdraw4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
