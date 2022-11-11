import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-patients',
  templateUrl: './login-patients.component.html',
  styleUrls: ['./login-patients.component.css']
})
export class LoginPatientsComponent implements OnInit {
person:any={};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doLogin(){
  if(this.person.username ==="admin" && this.person.password==="123"){
    this.router.navigate(['/patients']); 
 
}else{
 alert("Invalid username/password");
}
  }
}
