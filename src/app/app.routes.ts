import { Routes } from '@angular/router';

import { IndexComponent } from './modules/index/index.component';

export const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
  },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
