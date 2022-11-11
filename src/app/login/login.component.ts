import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message:any;
person: any={}

  getData!:any;
  constructor(private service:DoctorService,private router:Router) { }

  ngOnInit(): void {

  }

 doLogin(){
  
    if(this.person.username ==="fall" && this.person.password==="123"
    ||this.person.username ==="diagne" && this.person.password==="f23"
    ||this.person.username ==="ba" && this.person.password==="b45"
    ||this.person.username ==="sarr" && this.person.password==="mass190"
    ||this.person.username ==="matar" && this.person.password==="423"
    ||this.person.username ==="fall" && this.person.password==="mbay83"
    ||this.person.username ==="maman" && this.person.password==="1093"
    ||this.person.username ==="gueye" && this.person.password==="109"
    ||this.person.username ==="dia" && this.person.password==="123"
    ||this.person.username ==="tall" && this.person.password==="koi3"){
     this.router.navigate(['/doctors']); 
  
 }else{
  alert("Invalid username/password")
 }
 
//  onLogin() {
//   this.auth.login();
//   this.router.navigateByUrl('/facesnaps');
// }
 
 }
 
}
