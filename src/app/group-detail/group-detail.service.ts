import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGroupDetail } from '../interfaces/group-detail';

@Injectable({
  providedIn: 'root',
})
export class GroupDetailService {
  constructor() {}

  getGroupDetail(id: number): Observable<IGroupDetail> {
    return of({
      id: 1,
      name: 'B Seventy Thirty',
      description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
        `,
      isJoined: true,
      memberCount: 25,
      recentEvent: {
        id: 'two',
        title: 'b-seventy-30 #2',
        location: '700 Bourke St, Docklands',
        startTime: '2023-02-24T07:00:00Z',
        goingCount: 12,
        isGoing: true,
      },
    });
  }
}
