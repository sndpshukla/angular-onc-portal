import { NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { Notification } from '../models/notification';
import { CommunicationService } from '../shared/service/communication.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './app-notification.component.html',
  styleUrls: ['./app-notification.component.scss'],
  imports: [NgbAlertModule, NgIf],
  encapsulation: ViewEncapsulation.None,
})
export class AppNotificationComponent implements OnInit {
  notification?: Notification;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.notification$.subscribe((notification) => {
      this.notification = notification;
      setTimeout(() => (this.notification = undefined), 30000);
    });
  }

  getAlertClass(type: string) {
    return {
      'alert-success': type === 'success',
      'alert-danger': type === 'error',
      'alert-info': type === 'info',
    };
  }
}
