import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { IEvent } from '../interfaces/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() event!: IEvent;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openEventDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: EventDetailComponent,
      componentProps: {
        id,
      }
    });
    
    modal.present();
  }

}
