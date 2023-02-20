import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEventDetail } from '../interfaces/event-detail';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor() { }

  getEventDetail(id: string): Observable<IEventDetail> {
    return of(id === 'two' ?
      {
        id: 'two',
        title: 'b-seventy-30 #2',
        location: '700 Bourke St, Docklands',
        startTime: '2023-02-24T07:00:00Z',
        endTime: '2023-02-24T09:00:00Z',
        goingList: ['Imab', 'Jane', 'Tommy', 'Athy', 'Anthony', 'Imab', 'Jane', 'Tommy', 'Athy', 'Anthony', 'Imab', 'Jane'],
        isGoing: true,
        description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. <br />
          PayID: bla
        
        `,
      }: {
        id: 'three',
        title: 'b-seventy-30 #3',
        location: '700 Bourke St, Docklands',
        startTime: '2023-03-03T07:00:00Z',
        endTime: '2023-03-03T09:00:00Z',
        goingList: ['Tommy', 'Jane'],
        isGoing: false,
        description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. <br />
          PayID: bla
        
        `,
      });
  }
}
