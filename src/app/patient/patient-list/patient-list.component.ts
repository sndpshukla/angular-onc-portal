import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Patient } from '../../models/patient';
import { MOCK_PATIENTS } from '../data/mock-patient.data';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  ngOnInit(): void {
    this.patients = MOCK_PATIENTS;
  }
}
