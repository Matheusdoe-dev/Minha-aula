import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImg: string = 'assets/images/logo.svg';

  constructor() {}

  ngOnInit(): void {}
}
