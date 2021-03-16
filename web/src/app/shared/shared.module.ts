import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, InputComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ButtonComponent, HeaderComponent, InputComponent, FormsModule],
})
export class SharedModule {}
