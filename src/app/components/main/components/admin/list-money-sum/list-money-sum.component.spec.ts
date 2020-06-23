import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoneySumComponent } from './list-money-sum.component';

describe('ListMoneySumComponent', () => {
  let component: ListMoneySumComponent;
  let fixture: ComponentFixture<ListMoneySumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoneySumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoneySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
