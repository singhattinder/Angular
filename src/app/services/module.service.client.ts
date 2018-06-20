export class ModuleServiceClient {

  HEROKU_URL = 'https://webdev-attinder-summer1-2018.herokuapp.com/';
  MODULE_URL = 'https://webdev-attinder-summer1-2018.herokuapp.com/api/course/COURSE_ID/module';
  findAllModuleForCourses(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
