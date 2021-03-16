import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';

  value: string = '';

  @Output() valueChanged: EventEmitter<{
    data: string;
    value: string;
  }> = new EventEmitter();

  onChange(): void {
    this.valueChanged.emit({ data: this.name, value: this.value });
  }
}
