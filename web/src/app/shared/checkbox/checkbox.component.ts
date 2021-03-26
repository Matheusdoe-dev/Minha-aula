import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  value: string = '';

  @Output() valueChanged: EventEmitter<{
    data: string;
    value: string;
  }> = new EventEmitter();

  onChange(): void {
    this.valueChanged.emit({ data: this.name, value: this.value });
  }
}
