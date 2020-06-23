import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepositWithdraw5Component } from './list-deposit-withdraw5.component';

describe('ListDepositWithdraw5Component', () => {
  let component: ListDepositWithdraw5Component;
  let fixture: ComponentFixture<ListDepositWithdraw5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepositWithdraw5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepositWithdraw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
