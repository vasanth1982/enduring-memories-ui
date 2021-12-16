import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  formSignUp: FormGroup;
  isSubmitted: boolean = false;
  Submitted:boolean = false;
  error:string;
  email:string;
  mobile:number;
  password:string;
  isLogin = true;
  pet: string = "Login";

  constructor(public formBuilder: FormBuilder) {
    this.pet = "Login";
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      })
    });

    this.formSignUp = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      mobile: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(10)]
      })
    });
  }

  get r() {
    return this.formLogin.controls;
  }
  async submitLog() {
    this.isSubmitted = true;
    if (this.formLogin.invalid) {
      return false;
    }
    try {
     // const result = await this.phService.getPatientsByType().toPromise();
    console.log(this.formLogin);
    }  catch (e) {
    }
  }
  get s() {
    return this.formSignUp.controls;
  }
  async submitSign() {
    this.Submitted = true;
    if (this.formSignUp.invalid) {
      return false;
    }
    try {
     // const result = await this.phService.getPatientsByType().toPromise();
    console.log(this.formSignUp);
    }  catch (e) {
    }
  }
  onSwitchSignup(){
    this.isLogin = !this.isLogin;
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    if(event.detail.value == "Login"){
      this.isLogin = true;
    } else{
      this.isLogin = false;
    }
  }
}


