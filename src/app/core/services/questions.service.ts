import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Question } from '../model/question.model';
import { City } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  readonly ptzQuestions: Question[] = [
    {
      text: 'Сколько сезонов в Найт Лиге на данный момент?',
      index: 0,
      rightAnswerIndex: 2,
      answers: [
        {text: '9', index: 0},
        {text: '10', index: 1},
        {text: '11', index: 2},
        {text: '12', index: 3},
      ]
    },
    {
      text: 'Вопрос для Надежды: в какой аудитории главного корпуса проводились занятия по ММСИ?',
      index: 1,
      rightAnswerIndex: 3,
      answers: [
        {text: '416', index: 0},
        {text: '415', index: 1},
        {text: '420', index: 2},
        {text: '424', index: 3},
      ]
    },
    {
      text: 'Вопрос для Ильи: какого из перечисленных вкусов пива не существует?',
      index: 2,
      rightAnswerIndex: 2,
      answers: [
        {text: 'Со вкусом лайма и зефира', index: 0},
        {text: 'Со вкусом пиццы', index: 1},
        {text: 'Со вкусом индейки', index: 2},
        {text: 'Со вкусом розы', index: 3},
      ]
    },
    {
      text: 'Как зовут бабушку Полины?',
      index: 3,
      rightAnswerIndex: 1,
      answers: [
        {text: 'Людмила Алексеева', index: 0},
        {text: 'Людмила Алиевна', index: 1},
        {text: 'Любовь Александровна', index: 2},
        {text: 'Валентина Сергеевна', index: 3},
      ]
    },
    {
      text: 'Сколько весит самый большой чак-чак?',
      index: 4,
      rightAnswerIndex: 2,
      answers: [
        {text: '1143,5 кг', index: 0},
        {text: '2678,5 кг', index: 1},
        {text: '4026,4 кг', index: 2},
        {text: '10327,3 кг', index: 3},
      ]
    }
  ];

  readonly krasnodarQuestions: Question[] = [
    {
      text: 'Наташа, какого цвета была футболка, которую я дала тебе, когда мы нахуярились сангрией?',
      index: 0,
      rightAnswerIndex: 0,
      answers: [
        {text: 'Серая', index: 0},
        {text: 'Чёрная', index: 1},
        {text: 'Белая', index: 2},
        {text: 'Фиолетовая', index: 3},
      ]
    },
    {
      text: 'Иван, какого рода видео ты мне показывал, когда первый раз приехал в Петрозаводск?',
      index: 1,
      rightAnswerIndex: 3,
      answers: [
        {text: 'Про Омск', index: 0},
        {text: 'Про Доту', index: 1},
        {text: 'Старые мемы', index: 2},
        {text: 'Про двойников Путина', index: 3},
      ]
    },
    {
      text: 'Вопрос для обоих: на какой улице находится Додо пицца в Туапсе?',
      index: 2,
      rightAnswerIndex: 0,
      answers: [
        {text: 'Ул. Жукова', index: 0},
        {text: 'Пр. Победы', index: 1},
        {text: 'Ул. К. Маркса', index: 2},
        {text: 'Ул. Мира', index: 3},
      ]
    },
    {
      text: 'Как зовут бабушку Полины?',
      index: 3,
      rightAnswerIndex: 1,
      answers: [
        {text: 'Людмила Алексеева', index: 0},
        {text: 'Людмила Алиевна', index: 1},
        {text: 'Любовь Александровна', index: 2},
        {text: 'Валентина Сергеевна', index: 3},
      ]
    },
    {
      text: 'Сколько весит самый большой чак-чак?',
      index: 4,
      rightAnswerIndex: 2,
      answers: [
        {text: '1143,5 кг', index: 0},
        {text: '2678,5 кг', index: 1},
        {text: '4026,4 кг', index: 2},
        {text: '10327,3 кг', index: 3},
      ]
    }
  ];

  constructor(private userService: UserService) {
  }

  getQuestions(): Question[] {
    const currentCity = this.userService.getUserCity();
    if (currentCity === City.Ptz) {
      return this.ptzQuestions;
    } else if (currentCity === City.Krasnodar) {
      return this.krasnodarQuestions;
    }
    return null;
  }
}
