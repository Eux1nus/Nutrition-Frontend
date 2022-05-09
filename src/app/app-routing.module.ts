import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/views/login-form/login-form.component';
import { RegistrationComponent } from './components/views/registration/registration.component';

const routes: Routes = [
  {
    path: 'authorization',
    component: LoginFormComponent,
    data: {
      noHeader: true,
    },
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {
      noHeader: true,
    },
  },
  { path: '', redirectTo: 'authorization', pathMatch: 'full' },
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
