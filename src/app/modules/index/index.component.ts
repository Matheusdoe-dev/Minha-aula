import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  introImg: string = 'assets/images/intro-img.jpg';

  constructor() {
    document.title = 'Pagina Inicial - Minha Aula';
  }

  ngOnInit(): void {}
}
