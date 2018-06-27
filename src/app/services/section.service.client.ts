import {SectionModelClient} from '../models/section.model.client';

export class SectionServiceClient {
  LOCAL_URL = 'http://localhost:3000';
  HEROKU_URL = 'https://nodejs-mongo-assignment5.herokuapp.com';
  LOCAL_SECTION = 'http://localhost:3000/api/course/COURSEID/section';
  SECTION_URL = 'https://nodejs-mongo-assignment5.herokuapp.com/api/course/COURSEID/section';

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }
  findSectionsForStudents() {
    const url = this.HEROKU_URL + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then( response => response.json());
  }
  enrollStudentInSection(sectionId) {
    const url = this.HEROKU_URL + '/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  unEnrollStudentInSection(sectionId) {
    const url =  this.HEROKU_URL + '/api/student/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  deleteSection(sectionId) {
    const url =  this.HEROKU_URL + '/api/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  getSectionById(sectionId) {
    const url =  this.HEROKU_URL + '/api/section/' + sectionId;
    return fetch(url).then( response => response.json());
  }
  updateSectionById(sectionId, sectionName, sectionSeats) {
    const section = {
      name: sectionName,
      seats: sectionSeats
    }
    const url = this.HEROKU_URL + '/api/section/' + sectionId;
    return fetch(url, {
      method: 'put',
      credentials: 'include',
      body: JSON.stringify(section),
      headers: {
        'content-type' : 'application/json'
      }
    }).then( response => response.json());
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
