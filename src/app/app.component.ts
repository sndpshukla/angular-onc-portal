import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppNotificationComponent } from './app-notification/app-notification.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AppNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'oncology-portal';
}
