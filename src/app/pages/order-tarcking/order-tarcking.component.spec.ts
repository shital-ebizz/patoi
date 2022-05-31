import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTarckingComponent } from './order-tarcking.component';

describe('OrderTarckingComponent', () => {
  let component: OrderTarckingComponent;
  let fixture: ComponentFixture<OrderTarckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTarckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTarckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
