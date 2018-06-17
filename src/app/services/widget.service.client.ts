export class WidgetServiceClient {
  WIDGET_URL = 'http://localhost:8080/api/lesson/LESSON_ID/widget';
  findWidgetsForLesson(lessonId) {
    return fetch(this.WIDGET_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
