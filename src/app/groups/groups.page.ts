import { Component, OnInit } from '@angular/core';
import { applySpec, groupBy, partition, pipe, prop, propEq } from 'ramda';
import { ModalController } from '@ionic/angular';
import { map, Observable } from 'rxjs';
import { IGroup } from '../interfaces/group';
import { GroupsService } from './groups.service';
import { GroupDetailComponent } from '../group-detail/group-detail.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups$!: Observable<{ mine: IGroup[]; others: IGroup[]; }>;

  constructor(private groupsService: GroupsService, private modalCtrl: ModalController) { }

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

  async openGroupDetailModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: GroupDetailComponent,
      componentProps: {
        id,
      }
    });

    modal.present();
  }

}
