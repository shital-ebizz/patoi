import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFromRightComponent } from './shop-from-right.component';

describe('ShopFromRightComponent', () => {
  let component: ShopFromRightComponent;
  let fixture: ComponentFixture<ShopFromRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFromRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFromRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
