import { Time, WeekDay } from "@angular/common";

export interface  Doctor {
    doctor_id: number;
    doctor_name: string;
    doctor_education: string;
    doctor_speciality: string;
    appointement_date: string;
    appointement_day: string;
    available_time:string;
    imageURL:string;
    patient_name:string;
    patient_age:string;
    patient_blood_group:string;
    
}
