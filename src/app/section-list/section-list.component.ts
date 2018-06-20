import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionModelClient} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
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
  enrollCheck = (section) => {
    if (section.seats <= 0) {
      return true;
    } else {
      return false;
    }
  }
  enroll(section) {
    this.service.enrollStudentInSection(section._id)
      .then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}
