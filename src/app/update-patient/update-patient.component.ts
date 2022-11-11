import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  id!: number;
  patient!:Patient;
  constructor(private service:PatientService,private router:Router,
    private route:ActivatedRoute) {
      this.patient=new Patient();
     }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params[`id`];
    this.service.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
    },error=>console.error()  
    
    );
  }
  onSubmit(){
   
    this.service.updatePatient(this.id,this.patient).subscribe(result=>{
      this.goToPatients();
    },error=>console.error()
    );
  }
  goToPatients(){
    this.router.navigate(['/patients']);
  }
}
