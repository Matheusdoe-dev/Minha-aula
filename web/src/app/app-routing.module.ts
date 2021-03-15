import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexViewComponent } from './views/index/index-view.component';
import { UserLoginViewComponent } from './modules/users/user-login/user-login-view.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginViewComponent },
  { path: '', component: IndexViewComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
