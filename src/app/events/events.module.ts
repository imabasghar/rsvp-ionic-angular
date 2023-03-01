import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsPage } from './events.page';

import { EventsPageRoutingModule } from './events-routing.module';
import { EventCardModule } from '../event-card/event-card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventsPageRoutingModule,
    EventCardModule,
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
