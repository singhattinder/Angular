import {SectionModelClient} from '../models/section.model.client';

export class SectionServiceClient {
  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }
  findSectionsForStudents() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then( response => response.json());
  }
  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  unEnrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/student/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
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
