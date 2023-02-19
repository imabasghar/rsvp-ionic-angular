import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {
  events$?: Observable<IEvent[]>;
  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events$ = this.eventsService.getEvents();
  }

}
