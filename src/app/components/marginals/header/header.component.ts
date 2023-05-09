import { Component } from '@angular/core';
import { UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';
import { notificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private authService = authService;
  private notificationService = notificationService;

  loggedUser: UserWithType | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
  }

  getNotificationsStatus(): string {
    const unseenNotifications =
      this.notificationService.getNewNotificationForUser(
        this.loggedUser?.email ?? ''
      );

    if (unseenNotifications.length > 0) return 'brown';
    return 'white';
  }
}
