import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';

import { LoginData } from './user-login-view.interface';

@Component({
  templateUrl: './user-login-view.component.html',
  styleUrls: ['./user-login-view.component.scss'],
})
export class UserLoginViewComponent {
  login: LoginData = { email: '', senha: '' };

  constructor(private _usersService: UsersService) {
    document.title = 'Login - Minha Aula';
  }

  onValueChange(event: { value: string; data: string }): void {
    this.login = { ...this.login, [event.data]: event.value };
  }

  onSubmit(form: NgForm): void {
    console.log('Hello World', form.valid, form);

    this._usersService.postAuthentication(this.login).subscribe({
      next: (r) => console.log(r),
      error: (err) => console.log(err),
    });
  }
}
