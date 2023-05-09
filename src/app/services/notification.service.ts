import { localStorageItems } from 'initial_data/init';
import { Notification } from '../models/notification';
import { v4 as uuid } from 'uuid';
import * as _ from 'lodash';

export class NotificationService {
  constructor() {}

  public addNewNotification(text: string, email: string) {
    const newNotification = {
      text: text,
      id: uuid(),
      seen: false,
      email: email,
      date: new Date(),
    };

    const all = this.getAllNotifications();
    all.push(newNotification);
    this.saveAllNotifications(all);
  }

  public setAllNotificationsSeenForUser(email: string) {
    const allNotifications = this.getAllNotifications();
    allNotifications.forEach((notif) => {
      if (notif.email === email) {
        notif.seen = true;
      }
    });
    console.log(JSON.stringify(allNotifications));
    this.saveAllNotifications(allNotifications);
    return allNotifications;
  }

  public getNotificationForUser(email: string) {
    const allNotifications = this.getAllNotifications();
    return allNotifications.filter((n) => n.email === email);
  }

  public getNewNotificationForUser(email: string) {
    const allNotifications = this.getAllNotifications();
    return allNotifications.filter((n) => n.email === email && !n.seen);
  }

  public getAllNotifications(): Notification[] {
    const notifications = localStorage.getItem(localStorageItems.NOTIFICATIONS);
    return notifications
      ? _.orderBy(JSON.parse(notifications), ['date'], ['desc'])
      : [];
  }

  private saveAllNotifications(notifications: Notification[]) {
    localStorage.setItem(
      localStorageItems.NOTIFICATIONS,
      JSON.stringify(notifications)
    );
  }
}

export const notificationService = new NotificationService();
