export class ModuleServiceClient {

  MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';
  findAllModuleForCourses(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
