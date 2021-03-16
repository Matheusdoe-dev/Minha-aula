import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexModule } from './modules/index/index.module';
import { UsersModule } from './modules/users/users.module';

import { IndexViewComponent } from './modules/index/index-view/index-view.component';
import { UserLoginViewComponent } from './modules/users/user-login-view/user-login-view.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginViewComponent },
  { path: '', component: IndexViewComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [IndexModule, UsersModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
