import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.scss'],
})
export class IndexViewComponent implements OnInit {
  introImg: string = 'assets/images/intro-img.jpg';

  constructor() {}

  ngOnInit(): void {}
}
