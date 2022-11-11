import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfileDoctorComponent } from './login-profile-doctor.component';

describe('LoginProfileDoctorComponent', () => {
  let component: LoginProfileDoctorComponent;
  let fixture: ComponentFixture<LoginProfileDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfileDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
