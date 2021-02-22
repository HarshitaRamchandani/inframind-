import { Component, OnInit } from '@angular/core';
import studentsdata from "../../assets/data/database.json";

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


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  k: any;
  students: Student[] = studentsdata;
 
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {
    
    // this.data1 = data
    // this.router.navigate(['/show'],{
    //   queryParams: this.data1,
    //   });
    for (let i = 0; i < 11; i++) {
      if(this.students[i]['name']==data['searchi']){
        this.k = i;
        console.log(this.k)
        console.log("true")

      }

      console.log (this.students[i]['name']);
    }
    
    console.log(data)
     
  }

}
