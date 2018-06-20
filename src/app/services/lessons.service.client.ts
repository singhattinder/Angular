export class LessonsServiceClient {
  LESSON_URL = 'https://webdev-attinder-summer1-2018.herokuapp.com/api/module/MODULE_ID/lesson';
  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
