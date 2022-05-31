import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAuthenticationsComponent } from './profile-authentications.component';

describe('ProfileAuthenticationsComponent', () => {
  let component: ProfileAuthenticationsComponent;
  let fixture: ComponentFixture<ProfileAuthenticationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAuthenticationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAuthenticationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
