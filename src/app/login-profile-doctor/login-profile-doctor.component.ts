import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-profile-doctor',
  templateUrl: './login-profile-doctor.component.html',
  styleUrls: ['./login-profile-doctor.component.css']
})
export class LoginProfileDoctorComponent implements OnInit {
person:any={};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doLogin(){
    if(this.person.username ==="admin" && this.person.password==="123"){
      this.router.navigate(['/doctor_profile']); 
   
  }else{
   alert("Invalid username/password");
  }
    }
  }
  

