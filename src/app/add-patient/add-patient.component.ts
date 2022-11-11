import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient!:Patient
  constructor(private service:PatientService,
    private router:Router,
    private route:ActivatedRoute) { 
    this.patient=new Patient();
  }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.AddPatient(this.patient).subscribe(data=>
    this.goToPatients());
  
}
goToPatients(){
  this.router.navigate(['/patients']);
}
}
