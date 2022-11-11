import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients!:Patient[];
  constructor(private service:PatientService,
    private router:Router) { }

  ngOnInit(): void {
   this.listPatient();
  }
  listPatient(){
  this.service.ListPatient().subscribe(data=>{
    this.patients=data;
  });
}
updatePatient(id:number){
this.router.navigate(['update-patient',id])
}
deletePatient(id:number){
  this.service.deletePatient(id).subscribe(data=>{
    this.listPatient();
  },error=>console.log(error));
 
    alert("click ok to confirm the suppression");
  
}

public searchPatients(key: string): void {
  console.log(key);
  const results: Patient[] = [];
  for (const patient of this.patients) {
    if (patient.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || patient.dateofbirth.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || patient.blood_group.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || patient.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || patient.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || patient.address.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(patient);
    }
}
this.patients= results;
if (results.length === 0 || !key) {
  this.listPatient();
}
}

}