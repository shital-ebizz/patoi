import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFromLeftComponent } from './shop-from-left.component';

describe('ShopFromLeftComponent', () => {
  let component: ShopFromLeftComponent;
  let fixture: ComponentFixture<ShopFromLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFromLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFromLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
