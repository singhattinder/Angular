import { Component, OnInit } from '@angular/core';
import {CourseModelClient} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin-course-grid',
  templateUrl: './admin-course-grid.component.html',
  styleUrls: ['./admin-course-grid.component.css']
})
export class AdminCourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses: CourseModelClient[] = [];
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
