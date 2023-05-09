import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Notification } from 'src/app/models/notification';
import { UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';
import { notificationService } from 'src/app/services/notification.service';
import { returnEmptyObject } from 'src/app/utilities';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
  private authService = authService;
  private notificationService = notificationService;

  public error: string = '';

  public loggedIn: UserWithType;
  public notifications: Notification[];

  constructor(private router: Router) {
    const logged = this.authService.getLoggedUser();
    this.loggedIn = logged ?? returnEmptyObject();

    this.notifications = this.notificationService.getNotificationForUser(
      this.loggedIn.email
    );
  }

  ngAfterViewChecked() {
    this.notificationService.setAllNotificationsSeenForUser(
      this.loggedIn.email
    );
  }

  getBackgroundColor(seen: boolean) {
    return seen ? 'white' : '#f4f397';
  }
}
