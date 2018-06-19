import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {UserModelClient} from '../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModelClient = new UserModelClient();
  constructor(private  router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
    this.service.profile()
      .then(user => this.user = user);
  }
  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['login']));
  }
}
