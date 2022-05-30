import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
declare var $: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _router: Router) {
   
  }
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/
      ),
    ]),
  });
  checked: boolean = true;
  checkedResonse: boolean;
  response: string;
  formData() {
    this.checked = false;

    if (this.myForm.valid) {
      this._AuthService.signin(this.myForm.value).subscribe((res) => {
        this.checkedResonse = true;
        this.response = res.message;
        console.log('res', res);
        if (res.message == 'success') {
          this.checked = true;
          localStorage.setItem('TOKEN', res.token);
          this._router.navigate(['/profile']);
          this._AuthService.isLogin.next(false);
      
        }
      });
    }
  }
  ngOnInit(): void {
    $('#particle').particleground();
  }
}
