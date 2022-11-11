import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AdminComponent } from './admin/admin.component';
import { CreateProfileDoctorComponent } from './create-profile-doctor/create-profile-doctor.component';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateProfileDoctorComponent } from './update-profile-doctor/update-profile-doctor.component';

import { LoginAdminComponent } from './homepage/adminLogin/login-admin/login-admin.component';
import { LoginPatientsComponent } from './login-patients/login-patients.component';
import { LoginProfileDoctorComponent } from './login-profile-doctor/login-profile-doctor.component';
import { LoginReceptionistComponent } from './login-receptionist/login-receptionist.component';


const routes: Routes = [
  { path:'' , component:HomepageComponent },
  { path: 'doctors' , component: DoctorListComponent},
  {path: 'login-admin', component:LoginAdminComponent},
  {path:'login-patients' , component:LoginPatientsComponent},
  {path:'login-doctor-profile', component:LoginProfileDoctorComponent},
  {path:'login-receptionist', component:LoginReceptionistComponent},

  { path: 'patients' , component: PatientListComponent},
  { path: 'add-patient', component: AddPatientComponent},
  { path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'doctor_profile' , component:DoctorProfileComponent},
  {path: 'create-profile_doctor', component:CreateProfileDoctorComponent},
  {path: 'update-profile_doctor/:id', component:UpdateProfileDoctorComponent},
   { path: 'doctor_profile' , redirectTo:'', pathMatch:'full'},
  { path: 'patients' , redirectTo:'', pathMatch:'full'},
  {path:'receptionist',component:ReceptionistComponent},
  {path:'login-doctors',component:LoginComponent},
  {path:'admin', component:AdminComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
