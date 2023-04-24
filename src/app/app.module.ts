import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authorize/register/register.component';
import { LoginComponent } from './components/authorize/login/login.component';
import { HeaderComponent } from './components/marginals/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/marginals/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsComponent } from './components/customer-tickets/tickets/tickets.component';
import { EventsComponent } from './components/events/events.component';
import { AnimalsComponent } from './components/animals-all/animals/animals.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AccountComponent } from './components/account/account.component';
import { OperateTicketsComponent } from './components/operate-tickets/operate-tickets.component';
import { OperateAnimalsComponent } from './components/operate-animals/operate-animals.component';
import { ChildrenComponent } from './components/customer-tickets/children/children.component';
import { AdultsComponent } from './components/customer-tickets/adults/adults.component';
import { GroupComponent } from './components/customer-tickets/group/group.component';
import { AnimalsNextComponent } from './components/animals-all/animals-next/animals-next.component';
import { AnimalPageComponent } from './components/animals-all/animal-page/animal-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AboutComponent,
    TicketsComponent,
    EventsComponent,
    AnimalsComponent,
    NotificationsComponent,
    AccountComponent,
    OperateTicketsComponent,
    OperateAnimalsComponent,
    ChildrenComponent,
    AdultsComponent,
    GroupComponent,
    AnimalsNextComponent,
    AnimalPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
