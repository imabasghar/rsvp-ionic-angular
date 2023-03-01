import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IGroupDetail } from '../interfaces/group-detail';
import { GroupDetailService } from './group-detail.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit {
  @Input() id!: number;
  group$!: Observable<IGroupDetail>;

  constructor(private groupDetailService: GroupDetailService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.group$ = this.groupDetailService.getGroupDetail(this.id);
  }

}
