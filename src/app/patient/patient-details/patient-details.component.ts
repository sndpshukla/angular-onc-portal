import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from '../../models/patient';
import { CommunicationService } from '../../shared/service/communication.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
})
export class PatientDetailsComponent implements OnInit {
  patient?: Patient;

  constructor(
    private activeRoute: ActivatedRoute,
    private commService: CommunicationService,
    private router: Router,
    private patientService: PatientService,
  ) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.patient = this.patientService.getPatients().find((patient) => patient.id === id);

    if (!this.patient) {
      this.commService.sendNotification({
        type: 'warning',
        message: 'You seem to have navigated to an invalid patient. Please check again.',
      });
      this.router.navigate(['/patients']);
    }
  }
}
