import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {SectionModelClient} from '../models/section.model.client';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  section: SectionModelClient = new SectionModelClient();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: SectionServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }
  sections: SectionModelClient[] = [];
  loadSections(courseId) {
    this.section.courseId = courseId;
    this.service.findSectionsForCourse(courseId)
      .then( sections => this.sections = sections );
  }
  createSection(sectionName, seats) {
    this.service.createSection( this.section.courseId, sectionName, seats)
      .then(() => this.loadSections(this.section.courseId));
  }
  deleteSection(section) {
    this.service.deleteSection(section._id)
      .then(() => this.loadSections(this.section.courseId));
  }
  ngOnInit() {
  }
}
