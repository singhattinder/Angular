import {SectionModelClient} from '../models/section.model.client';

export class SectionServiceClient {
  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  createSection(courseId, name, seats) {
    const section = new SectionModelClient;
    section.courseId = courseId;
    section.name = name;
    section.seats = seats;
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type' : 'application/json'
      }
    });
  }
}
