import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userTokenKey = 'ChristmasGiftToken';
  readonly nameKey = 'ChristmasGiftName';
  readonly cityKey = 'ChristmasGiftCity';
  readonly krasnodarName = 'Ваня и Наташа';
  readonly krasnodarPassword = 'tiktok_house';
  readonly ptzName = 'Илья и Надя';
  readonly ptzPassword = 'ty_jopa';

  constructor() {
  }

  isAuthenticated(): boolean {
    return !!this.getUserToken();
  }

  getUserToken(): string {
    return localStorage.getItem(this.userTokenKey);
  }

  login(user: User): Observable<User> {
    const password = user.password;
    if (password === this.krasnodarPassword) {
      user.name = this.krasnodarName;
      user.city = City.Krasnodar;
    } else if (password === this.ptzPassword) {
      user.name = this.ptzName;
      user.city = City.Ptz;
    } else {
      // todo emit error event
    }
    return of(user);
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
    console.log(user.city);
    console.log(user.city.toString());
    localStorage.setItem(this.cityKey, user.city);
  }
}
