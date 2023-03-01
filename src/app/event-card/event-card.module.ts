import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card.component';
import { IonicModule } from '@ionic/angular';
import { EventDetailModule } from '../event-detail/event-detail.module';



@NgModule({
  declarations: [EventCardComponent],
  exports: [EventCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EventDetailModule,
  ]
})
export class EventCardModule { }
