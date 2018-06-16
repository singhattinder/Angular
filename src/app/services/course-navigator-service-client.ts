export class CourseNavigatorServiceClient {

  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }

  findAllModuleForCourses(courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModules(courseId, moduleId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

}
