import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UserLoginViewComponent } from './user-login/user-login-view.component';

@NgModule({
  declarations: [UserLoginViewComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class UsersModule {}
