import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private service: UserServiceClient) { }
  username;
  password;
  login(username, password) {
    this.service
      .login(username, password)
      .then( (user) => {
        if (user.userType === 'admin') {
          this.router.navigate(['admin']);
        } else {
            this.router.navigate(['profile']);
        }
      });
  }
  ngOnInit() {
  }
}
