import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<IEvent[]> {
    return of([
      {
        id: 'two',
        title: 'b-seventy-30 #2',
        location: '700 Bourke St, Docklands',
        startTime: '2023-02-24T07:00:00Z',
        goingCount: 12,
        isGoing: true,
      },
      {
        id: 'three',
        title: 'b-seventy-30 #3',
        location: '700 Bourke St, Docklands',
        startTime: '2023-03-03T07:00:00Z',
        goingCount: 2,
        isGoing: false,
      },
    ])
  }
}
