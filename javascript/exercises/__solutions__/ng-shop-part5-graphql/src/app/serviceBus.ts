import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';

export interface IEvent {
  type: String;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceBus {
  subject: Subject<IEvent>;

  constructor() {
    this.subject = new Subject<IEvent>();
  }

  publish(type: String, data: any) {
    this.subject.next({ type, data });
  }

  listen(type: String) {
    return this.subject.pipe(
      filter((event) => event.type === type),
      map((event) => event.data),
      share(),
    );
  }

  listenForAll() {
    return this.subject.pipe(share());
  }

  unsubscribe() {
    this.subject.unsubscribe();
  }
}
