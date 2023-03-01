import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GroupDetailComponent } from './group-detail.component';
import { EventCardModule } from '../event-card/event-card.module';



@NgModule({
  declarations: [GroupDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    EventCardModule,
  ]
})
export class GroupDetailModule { }
