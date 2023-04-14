import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/authorize/login/login.component';
import { UserType } from './models/user';
import { RegisterComponent } from './components/authorize/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { EventsComponent } from './components/events/events.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AccountComponent } from './components/account/account.component';
import { OperateTicketsComponent } from './components/operate-tickets/operate-tickets.component';

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
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'animals',
    component: AnimalsComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'operate-tickets',
    component: OperateTicketsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
