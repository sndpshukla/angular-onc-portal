import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Appointment } from '../../models/appointment';
import { MOCK_APPOINTMENTS } from '../data/mock-appointment.data';

@Component({
  selector: 'app-appointment-details',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.scss',
})
export class AppointmentDetailsComponent implements OnInit {
  appointment?: Appointment;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.appointment = MOCK_APPOINTMENTS.find(
      (appointment) => appointment.id === id
    );
  }
}
