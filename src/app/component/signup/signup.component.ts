import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../service/auth.service'
declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }
  myForm = new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    last_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    age:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)])
  })
  checked:boolean=true;
  checkedResonse:boolean;
  response:string;
  formData()
  {
    this.checked=false;

    if(this.myForm.valid)
    {

      this._AuthService.signup(this.myForm.value).subscribe((res)=>{
        this.checkedResonse = true;
        this.response=res.message;
        if(res.message=='success')
        {
          this.checked=true;
        }
      
      })
    }
    
  }
  ngOnInit(): void {
    $("#particle").particleground();
  }

}
