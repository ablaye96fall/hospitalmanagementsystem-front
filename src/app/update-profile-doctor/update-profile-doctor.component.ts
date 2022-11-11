import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorProfile } from '../doctor-profile';
import { DoctorProfileService } from '../doctor-profile.service';

@Component({
  selector: 'app-update-profile-doctor',
  templateUrl: './update-profile-doctor.component.html',
  styleUrls: ['./update-profile-doctor.component.css']
})
export class UpdateProfileDoctorComponent implements OnInit {
  id!:number;
  doctor_profile:DoctorProfile=new DoctorProfile();
  constructor(private service:DoctorProfileService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.service.getProfileDoctorById(this.id).subscribe(data=>{
      this.doctor_profile=data;
    },error=>console.log(error));
  }
onSubmit(){
  this.service.updateProfileDoctor(this.id,this.doctor_profile).subscribe(data=>{
    this.goToListProfileDoctor();
  },error=>console.log(error));
}
goToListProfileDoctor(){
  this.router.navigate(['doctor_profile'])
}
}
