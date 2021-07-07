import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexModule } from './modules/index/index.module';
import { UsersModule } from './modules/users/users.module';
import { StudentModule } from './modules/student/student.module';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    IndexModule,
    // UsersModule,
    // StudentModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
