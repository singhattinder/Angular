import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator-service-client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }

  courses = [];
  modules = [];
  lessons = [];
  temp_course_id = 0;
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
  selectCourse(courseId) {
      this.service.findAllModuleForCourses(courseId)
      .then(modules => this.modules = modules);
      this.temp_course_id = courseId;
  }
  selectModule(courseId, moduleId) {
    this.service.findAllLessonsForModules(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }
}
