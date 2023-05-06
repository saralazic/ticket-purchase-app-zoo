import { Component } from '@angular/core';
import { ZooEvent } from 'src/app/models/event';
import { UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';
import { eventsService } from 'src/app/services/zoo-events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  eventService = eventsService;
  authService = authService;
  loggedIn: UserWithType | null = null;
  events: ZooEvent[] = [];

  ngOnInit() {
    this.events = eventsService.getEvents();
    this.loggedIn = authService.getLoggedUser();
    console.log(this.events);
  }

  like(event: ZooEvent) {
    this.eventService.likeEvent(event, this.loggedIn?.email ?? '');
    this.events = this.eventService.getEvents();
  }

  getIconColor(index: number) {
    const likesOnEvent = this.events[index].likes;
    if (likesOnEvent.find((email) => email === this.loggedIn?.email))
      return 'brown';
    return '#003300';
  }
}
