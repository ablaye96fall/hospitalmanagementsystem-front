import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
//security


 public doctors!:Doctor[];
  id!:number;
  
  
  public deleteDoctor!: Doctor;
  public editDoctor!: Doctor;
 
  

  constructor(private service: DoctorService,
    private router:Router,private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.getDoctors();
    
  }
  public getDoctors(): void {
    
    this.service.getDoctors().subscribe(
     
      (response: Doctor[]) => {
        this.doctors = response;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddDoctor(addForm: NgForm): void {
    document.getElementById(`add-doctor-form`)!.click();
    this.service.addDoctor(addForm.value).subscribe(
      (response: Doctor) => {
        console.log(response);
        this.getDoctors();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDoctor(doctor: Doctor): void {
    this.service.updateDoctor(doctor).subscribe(
      (response: Doctor) => {
        console.log(response);
        this.getDoctors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDoctor(doctorById: number): void {
    this.service.deleteDoctor(doctorById).subscribe(
      (response: void) => {
        console.log(response);
        this.getDoctors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchDoctorAppointement(key: string): void {
    console.log(key);
    const results: Doctor[] = [];
    for (const doctor of this.doctors) {
      if (doctor.doctor_name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || doctor.doctor_education.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || doctor.doctor_speciality.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || doctor.appointement_day.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || doctor.available_time.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || doctor.appointement_date.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(doctor);
      }
    }
    this.doctors = results;
    if (results.length === 0 || !key) {
      this.getDoctors();
    }
  }

  public onOpenModal(doctor: Doctor, mode: string): void {
    const container = document.getElementById(`main-container`);
    const button = document.createElement(`button`);
    button.type = `button`;
    button.style.display = `none`;
    button.setAttribute(`data-toggle`, `modal`);
    if (mode === `add`) {
      button.setAttribute('data-target', '#addDoctorModal');
    }
    if (mode === `edit`) {
      this.editDoctor = doctor;
      button.setAttribute('data-target', '#updateDoctorModal');
    }
    if (mode === `delete`) {
      this.deleteDoctor = doctor;
      button.setAttribute('data-target', '#deleteDoctorModal');
    }
    container?.appendChild(button);
    button.click();
  }



}





    
      
