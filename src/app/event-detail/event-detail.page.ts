import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { IEventDetail } from '../interfaces/event-detail';
import { EventDetailService } from './event-detail.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.page.html',
  styleUrls: ['event-detail.page.scss']
})
export class EventDetailPage {
  eventDetail$?: Observable<IEventDetail>;
  constructor(private eventDetailService: EventDetailService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventDetail$ = this.eventDetailService.getEventDetail(this.route.snapshot.params['id']);
  }

}
