import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {SectionModelClient} from '../models/section.model.client';
import {QuizModelClient} from '../models/quiz.model.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private router: Router,private service: QuizServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadQuiz(params.quizId));
  }
  quizId = '';
  quiz: QuizModelClient;
  submission = {};
  loadQuiz(quizId) {
    this.quizId = quizId;
    this.service.findAllQuizById(quizId)
      .then((quiz) => this.quiz = quiz);
  }

  submit(submission) {
    this.service.submitQuiz(this.submission, this.quizId).then((res) => console.log(res));
    this.router.navigate(['quiz-submissions']);
  }
  ngOnInit() {
  }

}
