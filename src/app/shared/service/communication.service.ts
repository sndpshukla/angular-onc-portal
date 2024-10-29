import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Notification } from '../../models/notification';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private notificationSubject = new Subject<Notification>();
  private loginStateSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  notification$: Observable<Notification> = this.notificationSubject.asObservable();
  loginState$: Observable<boolean> = this.loginStateSubject.asObservable();

  sendNotification(notification: Notification): void {
    this.notificationSubject.next(notification);
  }

  updateLoginState(isLoggedIn: boolean): void {
    this.loginStateSubject.next(isLoggedIn);
  }

  private isUserLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
