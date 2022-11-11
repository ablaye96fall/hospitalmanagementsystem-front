import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  person: any={}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doLogin(){
  
    if(this.person.username ==="admin" && this.person.password==="123"){
     this.router.navigate(['/admin']); 
  
 }else{
  alert("Invalid username/password");
}
}
}
