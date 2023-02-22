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
