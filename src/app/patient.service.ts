import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiURL!:string;

  constructor(private http:HttpClient,
    private router:Router) {
      this.apiURL='http://localhost:8080/patients';
     }

    ListPatient():Observable<Patient[]>{
      return this.http.get<Patient[]>(this.apiURL);

    }
    AddPatient(patient:Patient):Observable<Patient>{
      return this.http.post<Patient>(this.apiURL,patient);
    }
    getPatientById(id:number):Observable<Patient>{
      return this.http.get<Patient>(`${this.apiURL}/${id}`);
    }
    updatePatient(id:number,patientdetails:Patient){
      return this.http.put<Patient>(`${this.apiURL}/${id}`,patientdetails);
    }
    deletePatient(id:number){
      return this.http.delete<Patient>(`${this.apiURL}/${id}`);
    }
}
