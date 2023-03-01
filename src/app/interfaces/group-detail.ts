import { IEvent } from './event';
import { IGroup } from './group';

export interface IGroupDetail extends IGroup {
  memberCount: number;
  recentEvent: IEvent;
}