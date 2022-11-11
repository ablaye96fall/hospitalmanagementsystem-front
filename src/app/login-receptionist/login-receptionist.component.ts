import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-receptionist',
  templateUrl: './login-receptionist.component.html',
  styleUrls: ['./login-receptionist.component.css']
})
export class LoginReceptionistComponent implements OnInit {
person:any={};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doLogin(){
    if(this.person.username ==="admin"  && this.person.password==="123"
    || this.person.username==="receptionist" && this.person.password==="123"){
      this.router.navigate(['/receptionist']); 
   
  }else{
   alert("Invalid username/password");
  }
    }
}
