export class WidgetServiceClient {
  WIDGET_URL = 'https://webdev-attinder-summer1-2018.herokuapp.com/api/lesson/LESSON_ID/widget';
  findWidgetsForLesson(lessonId) {
    return fetch(this.WIDGET_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
