import { localStorageItems } from 'initial_data/init';
import { ZooEvent } from '../models/event';

export class EventsService {
  constructor() {}

  public likeEvent(event: ZooEvent, email: string) {
    event.like(email);

    let allEvents = this.getEvents();
    const eventIndex = allEvents.findIndex((e) => e.id === event.id);
    if (eventIndex >= 0) {
      allEvents[eventIndex] = event;
      this.saveEvents(allEvents);
    }
  }

  public getEvents(): ZooEvent[] {
    const eventsFromStorage = localStorage.getItem(localStorageItems.EVENTS);
    const data = this.parseArrayFromStorage(eventsFromStorage);
    return data.map((event) => new ZooEvent(event));
  }

  public saveEvents(events: ZooEvent[]) {
    localStorage.setItem(
      localStorageItems.EVENTS,
      JSON.stringify(events.map((e) => e.getDto()))
    );
  }

  private parseArrayFromStorage(stringFromStorage: string | null): any[] {
    return stringFromStorage ? JSON.parse(stringFromStorage) : [];
  }
}

export const eventsService = new EventsService();
