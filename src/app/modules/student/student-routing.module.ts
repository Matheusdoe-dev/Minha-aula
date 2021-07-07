import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { studentRoutes } from './student.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(studentRoutes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
