import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() content: string = '';
  @Input() type: 'link' | 'button' = 'link';
  @Input() path?: string = '';
  @Input() width?: string = '';
  @Input() colors?: { background: string; color: string } = {
    background: '$base-color-2',
    color: 'white',
  };
  @Input() form?: string = '';

  constructor() {}

  ngOnInit(): void {}
}
