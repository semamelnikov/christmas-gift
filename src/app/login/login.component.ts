import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/model/user.model';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string;

  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
  }

  login() {
    if (this.password) {
      this.userService.login({name: '', password: this.password, city: null}).subscribe(
        (user: User) => {
          this.userService.saveUserToken(user);
          this.userService.saveUserName(user);
          this.userService.saveUserCity(user);
          this.router.navigate(['/questions']);
        },
        _ => this.errorMessage = 'Пароль введен неправильно!');
    } else {
      this.errorMessage = 'Введите пароль, пожалуйста!';
    }
  }
}
