
export class QuizServiceClient {
  LOCAL_URL = 'http://localhost:3000';
  HEROKU_URL = 'https://nodejs-mongo-assignment5.herokuapp.com';


  loadSubmissions(quizId) {
    return fetch(this.HEROKU_URL + '/api/quiz/' + quizId + '/submissions')
      .then((res) => res.json());
  }
  submitQuiz(quiz, quizId) {
    return fetch(this.HEROKU_URL + '/api/quiz/' + quizId, {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => res.json());
  }
  findAllQuizes() {
    return fetch(this.HEROKU_URL + '/api/quiz')
      .then((res) => res.json());
  }
  findAllQuizById(quizId) {
    return fetch(this.HEROKU_URL + '/api/quiz/' + quizId)
      .then((res) => res.json());
  }


}
