import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommunicationService } from '../shared/service/communication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private communicationService: CommunicationService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // Mock login
    if (this.f['username'].value === 'admin' && this.f['password'].value === 'admin') {
      sessionStorage.setItem('user', JSON.stringify({ role: 'admin' }));
      this.communicationService.sendNotification({ type: 'success', message: 'Logged in as admin' });
      this.communicationService.updateLoginState(true);
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
