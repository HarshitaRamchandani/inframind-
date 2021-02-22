import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import * as predictionsdata from "../../../../../assets/predictions.json";




@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  
  private empid;
  private empid2;
  name;
  email;
  bpsys;
  bydias;
  eid;
  os_level;
  bs_level;
  cholesterol;
  respiration_rate;
  pulse;
  stress;
  diabetes;
  Hypoxemia;
  bronchitis;
  CHD;
  Asthama;
  private empdetail;
  private empdetail2;
  constructor(private httpService: HttpClient, public activatedRoute : ActivatedRoute,) { 

    this.activatedRoute.queryParams.subscribe((res)=>{
      this.empid = res.employeeid;
      this.empid2 = res.employeeid;
      console.log(res.employeeid);
  });

  }

  arrData: string [];
  brrData: string [];
  ngOnInit() {
    // console.log(this.predictions[0].Hypoxemia);
    this.httpService.get('./assets/data/database.json').subscribe(
      data => {
        this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.empdetail = this.arrData[this.empid]
        this.name = this.empdetail.name;
        this.email = this.empdetail.emailid;
        this.bpsys= this.empdetail.BPsys;
        this.bydias = this.empdetail.BPdias;
        this.pulse = this.empdetail.pulse;
        this.bs_level = this.empdetail.bs_level;
        this.os_level= this.empdetail.os_level;
        this.pulse = this.empdetail.pulse;
        this.cholesterol = this.empdetail.cholesterol;
        this.respiration_rate = this.empdetail.respiration_rate;
        this.eid = this.empdetail.empid;
         console.log(this.empdetail.cholesterol);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );




    this.httpService.get('./assets/data/predictions.json').subscribe(
      data => {
        this.brrData = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.empdetail2 = this.brrData[this.empid2]
        this.stress = this.empdetail2.stress;
        this.diabetes = this.empdetail2.diabetes;
        this.Hypoxemia= this.empdetail2.Hypoxemia;
        this.bronchitis = this.empdetail2.bronchitis;
        this.CHD = this.empdetail2.CHD;
        this.Asthama = this.empdetail2.Asthama;
        
        this.eid = this.empdetail2.empid;
         console.log(this.empdetail2);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );


  }

}
