import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  constructor() {
    document.title = 'Criar conta - Minha Aula';
  }

  ngOnInit(): void {}
}
