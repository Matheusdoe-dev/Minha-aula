import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioInputComponent } from './radio-input/radio-input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    CheckboxComponent,
    RadioInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    CheckboxComponent,
    FormsModule,
    RadioInputComponent,
  ],
})
export class SharedModule {}
