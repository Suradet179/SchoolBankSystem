import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListWithdrawsComponent } from './view-list-withdraws.component';

describe('ViewListWithdrawsComponent', () => {
  let component: ViewListWithdrawsComponent;
  let fixture: ComponentFixture<ViewListWithdrawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListWithdrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListWithdrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
