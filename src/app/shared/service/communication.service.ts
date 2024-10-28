import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Notification } from '../../models/notification';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private notificationSubject = new Subject<Notification>();

  notification$: Observable<Notification> =
    this.notificationSubject.asObservable();

  sendNotification(notification: Notification): void {
    this.notificationSubject.next(notification);
  }
}
