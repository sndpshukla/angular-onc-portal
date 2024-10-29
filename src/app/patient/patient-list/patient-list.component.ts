import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Patient } from '../../models/patient';
import { CommunicationService } from '../../shared/service/communication.service';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  isLoggedIn = false;

  constructor(
    private communicationService: CommunicationService,
    private destroyRef: DestroyRef,
    private patientService: PatientService,
  ) {}

  ngOnInit(): void {
    this.patients = this.patientService.getPatients();

    const subscription = this.communicationService.loginState$.subscribe((state) => {
      this.isLoggedIn = state;
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
