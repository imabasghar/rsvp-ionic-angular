import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventDetailPage } from './event-detail.page';

import { EventDetailPageRoutingModule } from './event-detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventDetailPageRoutingModule
  ],
  declarations: [EventDetailPage]
})
export class EventDetailPageModule {}
