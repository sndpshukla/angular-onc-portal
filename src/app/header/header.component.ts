import { NgIf } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { CommunicationService } from '../shared/service/communication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkTheme = false;
  isLoggedIn = false;

  constructor(
    private router: Router,
    private communicationService: CommunicationService,
    private destroyRef: DestroyRef,
  ) {
    const subscription = this.communicationService.loginState$.subscribe((state) => {
      this.isLoggedIn = state;
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    document.documentElement.setAttribute('data-bs-theme', this.isDarkTheme ? 'dark' : 'light');
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.communicationService.updateLoginState(false);
    this.router.navigate(['/login']);
  }
}
