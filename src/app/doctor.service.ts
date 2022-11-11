import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpHeaderResponse } from '@angular/common/http';
import { Http2ServerResponse } from 'http2';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 
    private baseURL:string;
    
   
    username!:string;
    password!:string;
    id?:number;
    doctor!:Doctor;
  constructor(private http: HttpClient,
    private route : ActivatedRoute,
    private router:Router) { 
    this.baseURL ="http://localhost:8080/doctors";
   
    
    
      this.id;
    
  }

  getDoctors():Observable<Doctor[]>{
    // const headers=new HttpHeaders({Authorization:'Basic' +btoa(username+":"+password)})
    return this.http.get<Doctor[]>(this.baseURL);
  }
  addDoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.baseURL, doctor);
  
  }
  updateDoctor(doctor:Doctor){
    return this.http.put<Doctor>(this.baseURL, doctor);
  }
  deleteDoctor(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
// security

}
