import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Question } from '../core/model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() answerEmitter = new EventEmitter<number>();
  selectedAnswer: Answer;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAnswerSelect(answer: Answer) {
    this.selectedAnswer = answer;
    this.answerEmitter.emit(this.selectedAnswer.index);
  }
}
