import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  courseTitle;

  message = 'Hello world from hello-world-component';

  courses = [
    {title: 'CS5100' , id: 123},
    {title: 'CS5200' , id: 345},
    {title: 'CS5300' , id: 657},


    ];

  deleteCourse(courseId) {
    this.courses = this.courses.filter(course => (
      course.id !== courseId
    ));
  }

  addCourse(title) {
    this.courses.push({title: title , id: 389 });
    this.courseTitle = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
