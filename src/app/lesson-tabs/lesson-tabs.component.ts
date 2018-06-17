import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonsServiceClient} from '../services/lessons.service.client';
import {LessonModelClient} from '../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonsServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  lessons: LessonModelClient[] = [];
  moduleId;
  lessonId;
  courseId;
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.moduleId);
  }
  loadLessons(moduleId) {
    this.moduleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);

  }

  ngOnInit() {
  }
}
