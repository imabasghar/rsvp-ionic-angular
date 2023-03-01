import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IEventDetail } from '../interfaces/event-detail';
import { EventDetailService } from './event-detail.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.scss']
})
export class EventDetailComponent {
  @Input() id!: string;
  eventDetail$?: Observable<IEventDetail>;
  constructor(private eventDetailService: EventDetailService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.eventDetail$ = this.eventDetailService.getEventDetail(this.id);
  }

}
