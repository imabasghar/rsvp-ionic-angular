import { IEvent } from "./event";

export interface IEventDetail extends Partial<IEvent> {
  description: string;
  endTime: string;
  goingList: string[]; // TODO: Just names for now
}