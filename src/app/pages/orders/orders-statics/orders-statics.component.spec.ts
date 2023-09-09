import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStaticsComponent } from './orders-statics.component';

describe('OrdersStaticsComponent', () => {
  let component: OrdersStaticsComponent;
  let fixture: ComponentFixture<OrdersStaticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersStaticsComponent]
    });
    fixture = TestBed.createComponent(OrdersStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
