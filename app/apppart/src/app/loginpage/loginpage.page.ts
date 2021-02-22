import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';
import { ShowPage } from '../show/show.page';
import { Router } from '@angular/router';

// import * as data1 from '../../../../../assets/pwd.json'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  // title = 'Angular Form Validation Tutorial';
  //  angForm: FormGroup;
  //  constructor(private fb: FormBuilder) {
  //   this.createForm();
  //  }
  // // data: any;
  // // ionicForm: FormGroup;
  // // user: any = {};
  // // datarray: any;
  // // newvar: string [];
  // // constructor() {

  // //   // this.submitForm();
  // //  }

  // ngOnInit() {
    
  //   // this.datarray = data1;
  //   // console.log(data1);
  //   // // this.newvar = data1 as string [];
  //   // console.log(this.newvar);
  //   // this.httpService.get('./assets/data/pwd.json').subscribe(
  //   //   data => {
  //   //     this.newvar = data as string [];	 // FILL THE ARRAY WITH DATA.
  //   //      console.log(this.newvar[1]);
  //   //   },
  //   //   (err: HttpErrorResponse) => {
  //   //     console.log (err.message);
  //   //   }
  //   // );
  //   // fetch('../../../../../assets/pwd.json').then(res => res.json())
  //   // .then(json => {
  //   //   this.data = json;
  //   //   console.log(this.data);
  //   // });

    
    
  // }

  // // submitForm() {
  // //   console.log(this.ionicForm.value)
  // // }

  // createForm() {
  //   this.angForm = this.fb.group({
  //      name: ['', Validators.required ],
  //      address: ['', Validators.required ]

  //   });
  //   console.log(this.angForm.value)
  // }

  // onSubmit = function (user) {
  //   console.log(user);
  //   http.post('http://xxx/externalapi/add', user);
  // }


  private data1;
  title = 'My Angular Project!';
  todaydate;
  componentproperty;
  constructor(public router : Router) { }
  ngOnInit() {
    
  }
  onClickSubmit(data) {
    
    this.data1 = data
    this.router.navigate(['/show'],{
      queryParams: this.data1,
      });
    console.log(data)
     
  }

}
