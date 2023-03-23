import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageEmployeeComponent } from './homepage-employee/homepage-employee.component';
import { HomepageVisitorComponent } from './homepage-visitor/homepage-visitor.component';
import { LoginComponent } from './login/login.component';
import { UserType } from './models/user';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'visitor',
    component: HomepageVisitorComponent,
  },
  {
    path: 'employee',
    component: HomepageEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
