import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {UserModelClient} from '../models/user.model.client';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,
              private service: UserServiceClient) {
  }
  user: UserModelClient = new UserModelClient();
  username = this.user.username;
  password = this.user.password;
  password2 = this.user.password2;
  firstName = this.user.firstName;
  lastName = this.user.lastName;
  email = this.user.email;
  register(username, password, password2) {
    this.service
      .createUser(username, password, this.user.firstName,
        this.user.lastName, this.user.email, this.user.userType)
      .then(() =>
        this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}
