import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Notification } from '../models/notification';
import { CommunicationService } from '../shared/service/communication.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app-notification.component.html',
  styleUrls: ['./app-notification.component.scss'],
})
export class AppNotificationComponent implements OnInit, OnDestroy {
  notification?: Notification;
  private subscription!: Subscription;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.subscription = this.communicationService.notification$.subscribe((notification) => {
      this.notification = notification;
      this.scrollToTop();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
