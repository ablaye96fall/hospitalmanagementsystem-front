import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorProfile } from '../doctor-profile';
import { DoctorProfileService } from '../doctor-profile.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor_profiles!:DoctorProfile[];
  constructor(private service:DoctorProfileService,
    private router:Router) { }

  ngOnInit(): void {
    this.listProfileDoctor();
  }
  listProfileDoctor(){
  this.service.listProfileDoctor().subscribe(data=>{
    this.doctor_profiles=data;
  });
}
updateDoctorProfile(id:number){
 this.router.navigate(['update-profile_doctor',id])
}
deleteDoctorProfile(id:number){
  this.service.deleteProfileDoctor(id).subscribe(data=>{
    this.listProfileDoctor();
  },error=>console.log(error));
  alert("click ok to confirm the suppression");
}
public searchDoctor(key: string): void {
  console.log(key);
  const results: DoctorProfile[] = [];
  for (const doctor of this.doctor_profiles) {
    if (doctor.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || doctor.dateofbirth.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || doctor.qualification.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || doctor.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || doctor.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(doctor);
    }
}
this.doctor_profiles= results;
if (results.length === 0 || !key) {
  this.listProfileDoctor();
}
}
}