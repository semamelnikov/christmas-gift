import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Question } from '../core/model/question.model';
import { Router } from '@angular/router';
import { QuestionsService } from '../core/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  readonly errorVideoLinks = [
    'https://www.youtube.com/embed/IfrDMJU1TcI',
    'https://www.youtube.com/embed/JCwS3lGxJCU',
    'https://www.youtube.com/embed/bZPx3BFnC_U',
    'https://www.youtube.com/embed/pd342TR6PCM',
    'https://www.youtube.com/embed/1u-jamdlQfY',
    'https://www.youtube.com/embed/1NThfrNcLKE',
    'https://www.youtube.com/embed/TVwvcGajoQg'
  ];
  name = '';
  questions: Question[] = [];
  currentQuestion: Question;
  currentAnswerIndex;
  errorVideo = '';

  constructor(private userService: UserService, private questionsService: QuestionsService, private router: Router) {
  }

  ngOnInit(): void {
    this.name = this.userService.getUserName();
    this.questions = this.questionsService.getQuestions();
    this.currentQuestion = this.questions[0];
  }

  loadNextQuestion() {
    if (this.isAnswerValid()) {
      const nextQuestionIndex = this.currentQuestion.index + 1;
      if (nextQuestionIndex < this.questions.length) {
        this.currentQuestion = this.questions[nextQuestionIndex];
        this.currentAnswerIndex = -1;
        this.errorVideo = '';
      } else {
        this.userService.saveUserAnswers();
        this.router.navigate(['/final']);
      }
    } else {
      this.errorVideo = this.getRandomErrorVideoLink();
    }
  }

  private getRandomErrorVideoLink() {
    return this.errorVideoLinks[Math.floor(Math.random() * this.errorVideoLinks.length)];
  }

  updateCurrentAnswer(answerIndex: number) {
    this.errorVideo = '';
    this.currentAnswerIndex = answerIndex;
  }

  private isAnswerValid() {
    return this.currentQuestion.rightAnswerIndex === this.currentAnswerIndex;
  }
}
