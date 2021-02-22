import { Component, OnInit } from '@angular/core';
import studentsdata from "../../assets/data/database.json";
import predictionsdata from "../../assets/data/predictions.json";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



interface Student {
  name: String;
  empid: Number;
  emailid: String,
  BPsys: Number,
  BPdias: Number,
  os_level: Number,
  pulse: Number,
  bs_level: Number,
  cholesterol: number,
  respiration_rate: Number
}



interface Prediction {
  
  empid: Number;
  stress: String,
  diabetes: String,
  Hypoxemia: String,
  bronchitis: String,
  CHD: String,
  Asthama: String
}




@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  students: Student[] = studentsdata;
  predictions: Prediction[] = predictionsdata;
  constructor() { }
  
  ngOnInit(): void {



  }

}
