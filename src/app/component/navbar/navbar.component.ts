import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  islogin;
  constructor(private _AuthService: AuthService, private router: Router) {
    this._AuthService.isLogin.subscribe((res) => {
      this.islogin = res;
    });
  }
  logOut() {
    localStorage.clear();
    this._AuthService.isLogin.next(true);
    this.router.navigate(['/signin']);
  }
  ngOnInit(): void {}
}
