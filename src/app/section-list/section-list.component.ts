import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SectionModelClient} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  section: SectionModelClient = new SectionModelClient();
  constructor(private route: ActivatedRoute, private service: SectionServiceClient) {
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

  ngOnInit() {
  }

}
