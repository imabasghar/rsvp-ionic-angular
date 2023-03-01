import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGroup } from '../interfaces/group';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor() {}

  getGroups(): Observable<IGroup[]> {
    return of([
      {
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
      },
      {
        id: 2,
        name: 'Brunswick Evening',
        description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
        `,
        isJoined: false,
      },
      {
        id: 3,
        name: 'Brunswick Morning',
        description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
        `,
        isJoined: false,
      },
      {
        id: 4,
        name: 'MVA',
        description: `
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
          Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description. Some long Description.
        `,
        isJoined: false,
      },
    ]);
  }
}
