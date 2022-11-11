import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorProfile } from './doctor-profile';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {
  private bingUrl!:string;
  constructor(private http:HttpClient) { 
    this.bingUrl="http://localhost:8080/doctor_profile";
  }

  listProfileDoctor():Observable<DoctorProfile[]>{
    return this.http.get<DoctorProfile[]>(this.bingUrl);
  }
  createProfileDoctor(doctor_profile:DoctorProfile){
    return this.http.post<DoctorProfile>(this.bingUrl,doctor_profile);
  }
  getProfileDoctorById(id:number){
    return this.http.get<DoctorProfile>(`${this.bingUrl}/${id}`)
  }
  updateProfileDoctor(id:number, doctor_profile:DoctorProfile){
    return this.http.put<DoctorProfile>(`${this.bingUrl}/${id}`,doctor_profile);
  }
  deleteProfileDoctor(id:number){
    return this.http.delete<DoctorProfile>(`${this.bingUrl}/${id}`);
  }
}
