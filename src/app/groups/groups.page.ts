import { Component, OnInit } from '@angular/core';
import { applySpec, groupBy, partition, pipe, prop, propEq } from 'ramda';
import { map, Observable } from 'rxjs';
import { IGroup } from '../interfaces/group';
import { GroupsService } from './groups.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups$!: Observable<{ mine: IGroup[]; others: IGroup[]; }>;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groups$ = this.groupsService.getGroups()
      .pipe(
        map(
          pipe(
            partition(propEq('isJoined', true)),
            applySpec({
              mine: prop('0'),
              others: prop('1')
            })
          )
        )
      )
  }

}
