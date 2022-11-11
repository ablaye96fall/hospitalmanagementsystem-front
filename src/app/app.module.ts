import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { DoctorService } from './doctor.service';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { CreateProfileDoctorComponent } from './create-profile-doctor/create-profile-doctor.component';
import { UpdateProfileDoctorComponent } from './update-profile-doctor/update-profile-doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './homepage/adminLogin/login-admin/login-admin.component';
import { LoginPatientsComponent } from './login-patients/login-patients.component';
import { LoginProfileDoctorComponent } from './login-profile-doctor/login-profile-doctor.component';
import { LoginReceptionistComponent } from './login-receptionist/login-receptionist.component';





@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    HomepageComponent,
    PatientListComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    DoctorProfileComponent,
    CreateProfileDoctorComponent,
    UpdateProfileDoctorComponent,
    ReceptionistComponent,
    AdminComponent,
    LoginComponent,
    LoginAdminComponent,
    LoginPatientsComponent,
    LoginProfileDoctorComponent,
    LoginReceptionistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
    
    
  
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
