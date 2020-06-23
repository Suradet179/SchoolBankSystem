import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListDepositsComponent } from './view-list-deposits.component';

describe('ViewListDepositsComponent', () => {
  let component: ViewListDepositsComponent;
  let fixture: ComponentFixture<ViewListDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
