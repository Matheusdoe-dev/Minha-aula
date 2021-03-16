import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.scss'],
})
export class IndexViewComponent implements OnInit {
  introImg: string = 'assets/images/intro-img.jpg';

  constructor() {
    document.title = 'Pagina Inicial - Minha Aula';
  }

  ngOnInit(): void {}
}
