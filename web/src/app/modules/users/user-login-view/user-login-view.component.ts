import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-login-view.component.html',
  styleUrls: ['./user-login-view.component.scss'],
})
export class UserLoginViewComponent implements OnInit {
  constructor() {
    document.title = 'Login - Minha Aula';
  }

  ngOnInit(): void {}
}