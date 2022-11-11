import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorProfile } from '../doctor-profile';
import { DoctorProfileService } from '../doctor-profile.service';

@Component({
  selector: 'app-create-profile-doctor',
  templateUrl: './create-profile-doctor.component.html',
  styleUrls: ['./create-profile-doctor.component.css']
})
export class CreateProfileDoctorComponent implements OnInit {
  doctor_profile:DoctorProfile=new DoctorProfile;
  constructor(private service:DoctorProfileService,
    private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.createProfileDoctor(this.doctor_profile).subscribe(data=>{
    this.goToListProfileDoctor();
  },error=>console.log(error));
}
goToListProfileDoctor(){
  this.router.navigate(['doctor_profile'])
}
}
