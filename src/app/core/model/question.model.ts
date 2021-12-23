export interface Question {
  text: string;
  index?: number;
  rightAnswerIndex: number;
  answers: Answer[];
}

export interface Answer {
  text: string;
  index?: number;
}
