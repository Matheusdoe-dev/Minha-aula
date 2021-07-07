import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() secondaryLogo: boolean = false;
  logoImg: string = '';

  constructor() {}

  ngOnInit(): void {
    this.logoImg = this.secondaryLogo
      ? `assets/images/logo.svg`
      : `assets/images/logo-2.svg`;
  }
}
