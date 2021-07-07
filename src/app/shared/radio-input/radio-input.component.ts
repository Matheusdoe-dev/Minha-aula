import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() options: { label: string; value: string }[] = [];

  @Input() value: string = '';

  @Output() valueChanged: EventEmitter<{
    data: string;
    value: string;
  }> = new EventEmitter();

  onChange(): void {
    this.valueChanged.emit({ data: this.name, value: this.value });
  }
}
