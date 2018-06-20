export class CourseNavigatorServiceClient {

  findAllCourses() {
    return fetch('https://webdev-attinder-summer1-2018.herokuapp.com/api/course')
      .then(response => response.json());
  }

  findAllModuleForCourses(courseId) {
    return fetch('https://webdev-attinder-summer1-2018.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModules(courseId, moduleId) {
    return fetch('https://webdev-attinder-summer1-2018.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

}
