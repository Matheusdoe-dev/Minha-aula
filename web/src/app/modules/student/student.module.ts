import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';

import { StudentComponent } from './student.component';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule, RouterModule],
})
export class StudentModule {}
