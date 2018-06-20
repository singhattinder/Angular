import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {UserModelClient} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionModelClient} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModelClient = new UserModelClient();
  sections: SectionModelClient[] = [];
  constructor(private  router: Router,
              private sectionService: SectionServiceClient,
              private service: UserServiceClient) { }

  ngOnInit() {
    this.service.profile()
      .then(user => this.user = user);
    this.sectionService
      .findSectionsForStudents()
      .then( sections => this.sections = sections);
  }
  loadSections() {
    this.sectionService
      .findSectionsForStudents()
      .then( sections => this.sections = sections);
  }
  logout() {
    this.service
      .logout()
      .then(() => this.router.navigate(['login']));
  }
  unEnrollStudentInSection(sectionId) {
    this.sectionService.unEnrollStudentInSection(sectionId)
      .then(() => this.loadSections());
  }
  updateUser() {
    const new_user = {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    };
     this.service.updateUser(new_user).then(() => alert('Updated'));
  }
}
