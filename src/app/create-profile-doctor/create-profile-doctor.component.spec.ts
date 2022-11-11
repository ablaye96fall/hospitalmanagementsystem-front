import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileDoctorComponent } from './create-profile-doctor.component';

describe('CreateProfileDoctorComponent', () => {
  let component: CreateProfileDoctorComponent;
  let fixture: ComponentFixture<CreateProfileDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
