import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userTokenKey = 'ChristmasGiftToken';
  readonly nameKey = 'ChristmasGiftName';
  readonly cityKey = 'ChristmasGiftCity';
  readonly answersKey = 'ChristmasGiftAnswers';
  readonly krasnodarName = 'Ваня и Наташа';
  readonly krasnodarPassword = 'tiktok_house';
  readonly ptzName = 'Илья и Надя';
  readonly ptzPassword = 'ty_jopa';

  constructor() {
  }

  isFinalAuthenticated(): boolean {
    return !!this.getUserAnswers();
  }

  login(user: User): Observable<User> {
    return new Observable<User>(subscriber => {
      const password = user.password;
      if (password === this.krasnodarPassword) {
        user.name = this.krasnodarName;
        user.city = City.Krasnodar;
        subscriber.next(user);
        subscriber.complete();
      } else if (password === this.ptzPassword) {
        user.name = this.ptzName;
        user.city = City.Ptz;
        subscriber.next(user);
        subscriber.complete();
      } else {
        subscriber.error('Неправильный пароль!');
      }
    });
  }

  saveUserToken(user: User) {
    const token = btoa(`${user.password}`);
    localStorage.setItem(this.userTokenKey, token);
  }

  getUserName(): string {
    return localStorage.getItem(this.nameKey);
  }

  saveUserName(user: User) {
    localStorage.setItem(this.nameKey, user.name);
  }

  getUserCity(): string {
    return localStorage.getItem(this.cityKey);
  }

  saveUserCity(user: User) {
    localStorage.setItem(this.cityKey, user.city);
  }

  saveUserAnswers() {
    localStorage.setItem(this.answersKey, 'Final');
  }

  getUserAnswers(): string {
    return localStorage.getItem(this.answersKey);
  }
}
